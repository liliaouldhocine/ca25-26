**Domaine : Système de gestion de contenu (CMS) avec articles, commentaires et votes.**

---

### 1. Modélisation avancée (UML + Contraintes)

**Exercice :**
Concevez le schéma avec des relations plus complexes :

- Un `Utilisateur` peut être `Auteur` ou `Commentateur` (héritage ? rôle ?).
- Un `Article` a un `Auteur` et peut avoir plusieurs `Tag` (relation many-to-many).
- Un `Commentaire` est lié à un `Article` et un `Utilisateur`. Il peut aussi avoir une réponse à un autre commentaire (relation récursive).
- Un `Vote` (like/dislike) est lié à un `Article` et un `Utilisateur` (contrainte d'unicité : un vote par user par article).

**Solution :**
On évitera l'héritage et on utilisera des rôles et des clés étrangères.

```plaintext
+-------------+       +--------------+       +---------+       +-------------+
| Utilisateur |       |  Article     |       | Tag     |       | Article_Tag |
+-------------+       +--------------+       +---------+       +-------------+
| id_user     |<----+ | id_article   |    +--| id_tag  |    +--| #id_article |
| pseudo      |     | | titre        |    |  | nom     |    |  | #id_tag    |
| email       |     | | contenu      |    |  +---------+    |  +-------------+
| role        |     | | date_public  |    |                 |
+-------------+     | | #id_auteur   |--+ |                 |
                    | +--------------+  | |                 |
                    |                   | |                 |
                    | +--------------+  | | +------------+  | +-----------+
                    | |  Commentaire |  | | |    Vote    |  | |           |
                    | +--------------+  | | +------------+  | |           |
                    +--| id_article |  | +-| id_article |  +-| id_user   |
                       | id_user    |----+ | id_user    |----+           |
                       | id_parent  |--+   | type_vote  |    +-----------+
                       +--------------+    +------------+
```

---

### 2. Création de Tables avec Contraintes Avancées

**Exercice :**
Créez les tables avec :

- Des `ENUM` pour les rôles et types de vote.
- Des `UNIQUE CONSTRAINT` pour éviter les doublons.
- Des `CHECK` pour valider les données.
- Des `ON DELETE CASCADE` ou `SET NULL` cohérents.

**Solution :**

```sql
-- Types ENUM
CREATE TYPE user_role AS ENUM ('auteur', 'commentateur', 'admin');
CREATE TYPE vote_type AS ENUM ('like', 'dislike');

-- Table Utilisateur
CREATE TABLE Utilisateur (
    id_user SERIAL PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    role user_role NOT NULL DEFAULT 'commentateur'
);

-- Table Article
CREATE TABLE Article (
    id_article SERIAL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT,
    date_public TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_auteur INT NOT NULL REFERENCES Utilisateur(id_user) ON DELETE CASCADE,
    CHECK (LENGTH(contenu) > 10)
);

-- Table Tag
CREATE TABLE Tag (
    id_tag SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE
);

-- Table de liaison Article_Tag (Many-to-Many)
CREATE TABLE Article_Tag (
    id_article INT REFERENCES Article(id_article) ON DELETE CASCADE,
    id_tag INT REFERENCES Tag(id_tag) ON DELETE CASCADE,
    PRIMARY KEY (id_article, id_tag)
);

-- Table Commentaire (avec relation récursive)
CREATE TABLE Commentaire (
    id_comment SERIAL PRIMARY KEY,
    contenu TEXT NOT NULL,
    date_comment TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_article INT NOT NULL REFERENCES Article(id_article) ON DELETE CASCADE,
    id_user INT NOT NULL REFERENCES Utilisateur(id_user) ON DELETE CASCADE,
    id_parent INT REFERENCES Commentaire(id_comment) ON DELETE CASCADE, -- Pour les réponses
    CHECK (LENGTH(contenu) > 2)
);

-- Table Vote avec contrainte d'unicité
CREATE TABLE Vote (
    id_article INT REFERENCES Article(id_article) ON DELETE CASCADE,
    id_user INT REFERENCES Utilisateur(id_user) ON DELETE CASCADE,
    type vote_type NOT NULL,
    PRIMARY KEY (id_article, id_user) -- Un vote unique par user par article
);
```

---

### 3. Insertions avec Sous-requêtes et Transactions

**Exercice :**
Insérez des données de manière robuste en utilisant des transactions et des sous-requêtes pour récupérer des IDs.

**Solution :**

```sql
BEGIN; -- Début de la transaction

-- 1. Insertion des utilisateurs
INSERT INTO Utilisateur (pseudo, email, role) VALUES
('AliceWriter', 'alice@mail.com', 'auteur'),
('BobComment', 'bob@mail.com', 'commentateur'),
('Admin', 'admin@mail.com', 'admin')
RETURNING id_user; -- Retourne les IDs générés

-- 2. Insertion d'un article en récupérant l'ID de l'auteur
INSERT INTO Article (titre, contenu, id_auteur)
SELECT 'Advanced SQL', 'This is a long content about advanced SQL...', id_user
FROM Utilisateur WHERE pseudo = 'AliceWriter'
RETURNING id_article;

-- 3. Insertion de tags
INSERT INTO Tag (nom) VALUES
('SQL'), ('Database'), ('Programming')
ON CONFLICT (nom) DO NOTHING; -- Gestion des conflits si le tag existe déjà

-- 4. Association article-tag en utilisant les IDs récupérés précédemment
INSERT INTO Article_Tag (id_article, id_tag)
VALUES
(currval('article_id_article_seq'), (SELECT id_tag FROM Tag WHERE nom = 'SQL')),
(currval('article_id_article_seq'), (SELECT id_tag FROM Tag WHERE nom = 'Database'));

-- 5. Insertion d'un commentaire
INSERT INTO Commentaire (contenu, id_article, id_user)
SELECT 'Great article!', currval('article_id_article_seq'), id_user
FROM Utilisateur WHERE pseudo = 'BobComment';

COMMIT; -- Validation de la transaction
```

---

### 4. Requêtes Avancées (CTE, Window Functions)

**Exercice 1 :** Trouvez les 3 articles les plus récents de chaque auteur (utilisez `ROW_NUMBER()`).
**Solution :**

```sql
WITH ranked_articles AS (
    SELECT
        a.titre,
        u.pseudo AS auteur,
        a.date_public,
        ROW_NUMBER() OVER (PARTITION BY a.id_auteur ORDER BY a.date_public DESC) as rank
    FROM Article a
    JOIN Utilisateur u ON a.id_auteur = u.id_user
)
SELECT titre, auteur, date_public
FROM ranked_articles
WHERE rank <= 3;
```

**Exercice 2 :** Calculez le ratio de likes/dislikes pour chaque article, ainsi que le nombre total de votes (Utilisez `FILTER` ou `CONDITIONAL AGREGATION`).
**Solution :**

```sql
SELECT
    a.titre,
    COUNT(v.*) AS total_votes,
    COUNT(v.*) FILTER (WHERE v.type = 'like') AS likes,
    COUNT(v.*) FILTER (WHERE v.type = 'dislike') AS dislikes,
    ROUND(
        COUNT(v.*) FILTER (WHERE v.type = 'like') * 1.0 /
        NULLIF(COUNT(v.*), 0) * 100,  -- Évite la division par zéro
    2) AS like_ratio_percent
FROM Article a
LEFT JOIN Vote v ON a.id_article = v.id_article
GROUP BY a.id_article, a.titre
ORDER BY like_ratio_percent DESC NULLS LAST;
```

---

### 5. Gestion des Transactions et Verrous

**Exercice :**
Simulez un vote utilisateur de manière thread-safe. Il faut :

1. Vérifier si l'utilisateur n'a pas déjà voté.
2. Insérer ou mettre à jour son vote dans une transaction.
3. Utiliser un verrou pour éviter les race conditions.

**Solution :**

```sql
BEGIN;
-- Verrouille la ligne de l'article pour cet utilisateur (ou insère une ligne vide si elle n'existe pas)
-- Cette technique est avancée et dépend du SGBD. Voici une approche avec ON CONFLICT :
INSERT INTO Vote (id_article, id_user, type)
VALUES (123, 456, 'like')
ON CONFLICT (id_article, id_user)
DO UPDATE SET type = EXCLUDED.type
WHERE Vote.id_article = 123 AND Vote.id_user = 456;
-- Now, update the article's vote count in a consistent way
COMMIT;
```

**Note :** Dans la pratique, pour une haute concurrence, on utiliserait peut-être une table séparée pour les compteurs et des verrous plus fins.

---

### 6. Déclencheurs (Triggers)

**Exercice :**
Créez un trigger qui met automatiquement à jour un champ `nombre_commentaires` dans la table `Article` à chaque insertion/suppression dans `Commentaire`.

**Solution :**

```sql
-- 1. Ajouter la colonne
ALTER TABLE Article ADD COLUMN nombre_commentaires INT DEFAULT 0;

-- 2. Fonction du trigger
CREATE OR REPLACE FUNCTION update_nb_comments()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        UPDATE Article
        SET nombre_commentaires = nombre_commentaires + 1
        WHERE id_article = NEW.id_article;
    ELSIF (TG_OP = 'DELETE') THEN
        UPDATE Article
        SET nombre_commentaires = nombre_commentaires - 1
        WHERE id_article = OLD.id_article;
    END IF;
    RETURN NULL; -- OK since it's an AFTER trigger
END;
$$ LANGUAGE plpgsql;

-- 3. Créer le trigger
CREATE TRIGGER trig_update_nb_comments
AFTER INSERT OR DELETE ON Commentaire
FOR EACH ROW
EXECUTE FUNCTION update_nb_comments();
```

---

### 7. Requêtes Récursives

**Exercice :** Affichez le fil de discussion complet d'un commentaire (tous ses parents) pour un commentaire dont l'ID est 25.
**Solution :**

```sql
WITH RECURSIVE comment_tree AS (
    -- Anchor member: le commentaire de départ
    SELECT id_comment, contenu, id_parent, date_comment, id_user
    FROM Commentaire
    WHERE id_comment = 25

    UNION ALL

    -- Recursive member: remonter vers les parents
    SELECT c.id_comment, c.contenu, c.id_parent, c.date_comment, c.id_user
    FROM Commentaire c
    INNER JOIN comment_tree ct ON c.id_comment = ct.id_parent
)
SELECT * FROM comment_tree
ORDER BY date_comment; -- Pour avoir la conversation dans l'ordre chronologique
```
