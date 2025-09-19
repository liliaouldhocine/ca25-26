### 1. Diagramme UML

**Exercice :**
Concevez un diagramme UML (en mode texte) représentant les tables nécessaires pour gérer une bibliothèque. Nous aurons besoin de :

- Une table `Livre` avec des informations sur les livres (titre, auteur, etc.).
- Une table `Adherent` avec des informations sur les membres de la bibliothèque (nom, prénom, etc.).
- Une table `Emprunt` qui enregistre quel adhérent a emprunté quel livre et à quelle date.

Pensez aux clés primaires et aux relations entre les tables.

**Solution :**

```plaintext
+-------------+       +--------------+       +-----------+
|   Adherent  |       |   Emprunt    |       |   Livre   |
+-------------+       +--------------+       +-----------+
| id_adherent |<----+ | id_emprunt   |    +--| id_livre  |
| nom         |     | | date_emprunt |    |  | titre     |
| prenom      |     | | date_retour  |    |  | auteur    |
| email       |     | +--------------+    |  | annee     |
+-------------+     |                     |  +-----------+
                    |                     |
                    +--| id_adherent |    |
                       | id_livre    |----+
                       +-------------+
```

_Explication : Un `Adherent` peut avoir plusieurs `Emprunt`. Un `Livre` peut être emprunté plusieurs fois (donc présent dans plusieurs `Emprunt`). La table `Emprunt` fait le lien entre `Adherent` et `Livre` et contient les clés étrangères `id_adherent` et `id_livre`._

---

### 2. Création de Tables (DDL - Data Definition Language)

**Exercice :**
Écrivez les requêtes SQL pour créer les trois tables décrites dans le diagramme UML. Pensez à définir les clés primaires, les clés étrangères et les types de données appropriés (INT, VARCHAR, DATE, etc.).

**Solution :**

```sql
-- 1. Création de la table Adherent
CREATE TABLE Adherent (
    id_adherent INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);

-- 2. Création de la table Livre
CREATE TABLE Livre (
    id_livre INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100) NOT NULL,
    auteur VARCHAR(100) NOT NULL,
    annee_publication INT
);

-- 3. Création de la table Emprunt (qui fait la liaison)
CREATE TABLE Emprunt (
    id_emprunt INT PRIMARY KEY AUTO_INCREMENT,
    id_adherent INT,
    id_livre INT,
    date_emprunt DATE NOT NULL,
    date_retour DATE,
    -- Définition des clés étrangères
    FOREIGN KEY (id_adherent) REFERENCES Adherent(id_adherent),
    FOREIGN KEY (id_livre) REFERENCES Livre(id_livre)
);
```

---

### 3. Inserts (DML - Data Manipulation Language)

**Exercice :**
Insérez les données suivantes dans les tables :

- **Adhérents :** Sophie Dupont, Marc Martin, Léa Leroy.
- **Livres :** "1984" de George Orwell (1949), "Dune" de Frank Herbert (1965), "Le Petit Prince" de Antoine de Saint-Exupéry (1943).
- **Emprunts :**
  - Sophie a emprunté "1984" le 2023-10-01 et l'a rendu le 2023-10-15.
  - Marc a emprunté "Dune" le 2023-11-05. Il ne l'a pas encore rendu (`NULL`).
  - Léa a emprunté "Le Petit Prince" le 2023-09-10 et l'a rendu le 2023-09-20.

**Solution :**

```sql
-- Insertion des adhérents
INSERT INTO Adherent (nom, prenom, email) VALUES
('Dupont', 'Sophie', 's.dupont@email.com'),
('Martin', 'Marc', 'm.martin@email.com'),
('Leroy', 'Léa', 'l.leroy@email.com');

-- Insertion des livres
INSERT INTO Livre (titre, auteur, annee_publication) VALUES
('1984', 'George Orwell', 1949),
('Dune', 'Frank Herbert', 1965),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1943);

-- Insertion des emprunts
-- Note : Les id (1, 2, 3) peuvent varier si votre base est vide. Ajustez en fonction de vos propres IDs.
INSERT INTO Emprunt (id_adherent, id_livre, date_emprunt, date_retour) VALUES
(1, 1, '2023-10-01', '2023-10-15'), -- Sophie (1) emprunte 1984 (1)
(2, 2, '2023-11-05', NULL),         -- Marc (2) emprunte Dune (2)
(3, 3, '2023-09-10', '2023-09-20'); -- Léa (3) emprunte Le Petit Prince (3)
```

---

### 4. Requêtes Simples (SELECT, WHERE)

**Exercice 1 :** Affichez la liste de tous les livres.
**Solution :**

```sql
SELECT * FROM Livre;
```

**Exercice 2 :** Affichez les noms et prénoms de tous les adhérents.
**Solution :**

```sql
SELECT nom, prenom FROM Adherent;
```

**Exercice 3 :** Trouvez tous les livres publiés après 1950.
**Solution :**

```sql
SELECT * FROM Livre WHERE annee_publication > 1950;
```

---

### 5. JOIN

**Exercice 1 :** Affichez tous les emprunts avec le nom de l'adhérent et le titre du livre.
**Solution :**

```sql
SELECT E.date_emprunt, E.date_retour, A.nom, A.prenom, L.titre
FROM Emprunt E
INNER JOIN Adherent A ON E.id_adherent = A.id_adherent
INNER JOIN Livre L ON E.id_livre = L.id_livre;
```

**Exercice 2 :** Affichez la liste des livres qui sont actuellement empruntés (non rendus).
**Solution :**

```sql
SELECT L.titre, A.nom, A.prenom, E.date_emprunt
FROM Emprunt E
INNER JOIN Livre L ON E.id_livre = L.id_livre
INNER JOIN Adherent A ON E.id_adherent = A.id_adherent
WHERE E.date_retour IS NULL; -- Le livre n'a pas été rendu
```

---

### 6. GROUP BY

**Exercice 1 :** Comptez le nombre de livres empruntés par chaque adhérent. Affichez le nom de l'adhérent et le compte.
**Solution :**

```sql
SELECT A.nom, A.prenom, COUNT(E.id_emprunt) AS nombre_emprunts
FROM Adherent A
LEFT JOIN Emprunt E ON A.id_adherent = E.id_adherent -- LEFT JOIN pour inclure ceux qui n'ont jamais emprunté
GROUP BY A.id_adherent, A.nom, A.prenom;
```

**Exercice 2 :** Quel est le livre le plus ancien de la bibliothèque ? (Utilisez `MIN()`)
**Solution :**

```sql
SELECT titre, auteur, MIN(annee_publication) AS plus_ancien
FROM Livre;
-- Alternative plus robuste si plusieurs livres ont la même année min
SELECT titre, auteur, annee_publication
FROM Livre
ORDER BY annee_publication ASC
LIMIT 1;
```

---

### 7. Requêtes Imbriquées (IN)

**Exercice 1 :** Trouvez les adhérents qui n'ont _jamais_ emprunté de livre.
**Solution :**

```sql
SELECT nom, prenom
FROM Adherent
WHERE id_adherent NOT IN (
    SELECT DISTINCT id_adherent -- Sélectionne tous les IDs qui apparaissent dans un emprunt
    FROM Emprunt
    WHERE id_adherent IS NOT NULL -- Bonne pratique
);
```

**Exercice 2 :** Trouvez tous les livres qui ont été empruntés en octobre 2023.
**Solution :**

```sql
SELECT titre, auteur
FROM Livre
WHERE id_livre IN (
    SELECT id_livre
    FROM Emprunt
    WHERE date_emprunt >= '2023-10-01' AND date_emprunt <= '2023-10-31'
);
-- Alternative plus élégante avec BETWEEN
SELECT titre, auteur
FROM Livre
WHERE id_livre IN (
    SELECT id_livre
    FROM Emprunt
    WHERE date_emprunt BETWEEN '2023-10-01' AND '2023-10-31'
);
```
