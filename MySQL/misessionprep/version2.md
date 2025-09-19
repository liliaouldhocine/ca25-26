### 1. Diagramme UML

**Exercice :**
Concevez un diagramme UML pour un site de e-commerce. Nous aurons besoin de :

- Une table `Client` avec les informations des clients.
- Une table `Produit` avec les détails des articles en vente.
- Une table `Commande` qui représente le passage d'une commande globale à une date donnée.
- Une table `LigneCommande` qui représente chaque produit individuel commandé dans une commande (une commande peut contenir plusieurs produits).

Pensez aux clés primaires, aux relations et aux attributs comme le prix et la quantité.

**Solution :**

```plaintext
+-----------+       +-------------+       +----------+       +---------+
|  Client   |       |  Commande   |       | Ligne    |       | Produit |
|           |       |             |       | Commande |       |         |
+-----------+       +-------------+       +----------+       +---------+
| id_client |<----+ | id_commande |<----+ | id_ligne |    +--| id_prod |
| nom       |     | | date_cmd    |     | | quantite |    |  | nom     |
| email     |     | | #id_client  |--+ | | #id_cmd  |    |  | prix    |
+-----------+     | +-------------+  | | | #id_prod |----+  | stock   |
                  |                   | | +----------+       +---------+
                  |                   | |
                  +--| id_client |    | |
                     +-------------+  | |
                                      | |
                                      +--| id_commande |
                                         +-------------+
```

_Explication : Un `Client` passe plusieurs `Commandes`. Une `Commande` est composée de plusieurs `LigneCommande`. Une `LigneCommande` correspond à un `Produit` spécifique._

---

### 2. Création de Tables (DDL)

**Exercice :**
Écrivez les requêtes SQL pour créer les quatre tables. Ajoutez des contraintes (`NOT NULL`) où cela semble logique.

**Solution :**

```sql
-- 1. Table Client
CREATE TABLE Client (
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- 2. Table Produit
CREATE TABLE Produit (
    id_prod INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL, -- 10 chiffres max, dont 2 après la virgule
    stock INT DEFAULT 0
);

-- 3. Table Commande
CREATE TABLE Commande (
    id_commande INT PRIMARY KEY AUTO_INCREMENT,
    date_cmd DATE NOT NULL,
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES Client(id_client)
);

-- 4. Table LigneCommande (Table de liaison entre Commande et Produit)
CREATE TABLE LigneCommande (
    id_ligne INT PRIMARY KEY AUTO_INCREMENT,
    id_commande INT,
    id_prod INT,
    quantite INT NOT NULL CHECK (quantite > 0),
    FOREIGN KEY (id_commande) REFERENCES Commande(id_commande),
    FOREIGN KEY (id_prod) REFERENCES Produit(id_prod)
);
```

---

### 3. Inserts (DML)

**Exercice :**
Insérez les données suivantes :

- **Clients :** Alice Durand, Bob Martin.
- **Produits :**
  - "T-shirt Cotton" - 19.99€ - Stock: 50
  - "Cafetière programmable" - 49.50€ - Stock: 15
  - "Livre SQL pour Débutants" - 29.00€ - Stock: 20
- **Commandes :**
  - Le 2023-11-01, Alice a passé une commande (#1) avec 2 T-shirts et 1 livre.
  - Le 2023-11-02, Bob a passé une commande (#2) avec 1 cafetière.

**Solution :**

```sql
-- Insertion des Clients
INSERT INTO Client (nom, prenom, email) VALUES
('Durand', 'Alice', 'a.durand@email.com'),
('Martin', 'Bob', 'b.martin@email.com');

-- Insertion des Produits
INSERT INTO Produit (nom, prix, stock) VALUES
('T-shirt Cotton', 19.99, 50),
('Cafetière programmable', 49.50, 15),
('Livre SQL pour Débutants', 29.00, 20);

-- Insertion des Commandes (il faut d'abord une commande avant d'ajouter des lignes)
INSERT INTO Commande (date_cmd, id_client) VALUES
('2023-11-01', 1), -- Commande d'Alice
('2023-11-02', 2); -- Commande de Bob

-- Insertion des Lignes de commande
INSERT INTO LigneCommande (id_commande, id_prod, quantite) VALUES
(1, 1, 2), -- Cmd #1, 2x T-shirt (id_prod 1)
(1, 3, 1), -- Cmd #1, 1x Livre (id_prod 3)
(2, 2, 1); -- Cmd #2, 1x Cafetière (id_prod 2)
```

---

### 4. Requêtes Simples (SELECT, WHERE)

**Exercice 1 :** Listez tous les produits qui coûtent moins de 30 euros.
**Solution :**

```sql
SELECT * FROM Produit WHERE prix < 30;
```

**Exercice 2 :** Affichez les commandes passées après le 1er Novembre 2023.
**Solution :**

```sql
SELECT * FROM Commande WHERE date_cmd > '2023-11-01';
```

---

### 5. JOIN (Multi-tables)

**Exercice 1 :** Affichez le détail complet de la commande n°1 : Date, nom du client, et pour chaque produit : nom, prix et quantité.
**Solution :**

```sql
SELECT C.date_cmd, Cl.nom, Cl.prenom, P.nom AS produit, P.prix, L.quantite
FROM Commande C
JOIN Client Cl ON C.id_client = Cl.id_client
JOIN LigneCommande L ON C.id_commande = L.id_commande
JOIN Produit P ON L.id_prod = P.id_prod
WHERE C.id_commande = 1;
```

**Exercice 2 :** Trouvez tous les produits qui n'ont jamais été commandés. (Utilisez un `LEFT JOIN` et vérifiez les `NULL`).
**Solution :**

```sql
SELECT P.nom, P.prix
FROM Produit P
LEFT JOIN LigneCommande L ON P.id_prod = L.id_prod
WHERE L.id_prod IS NULL;
```

---

### 6. GROUP BY (Agrégations)

**Exercice 1 :** Calculez le chiffre d'affaires total généré par chaque client (affichez son nom et le total dépensé).
**Solution :**

```sql
SELECT Cl.nom, Cl.prenom, SUM(P.prix * L.quantite) AS total_depense
FROM Client Cl
JOIN Commande C ON Cl.id_client = C.id_client
JOIN LigneCommande L ON C.id_commande = L.id_commande
JOIN Produit P ON L.id_prod = P.id_prod
GROUP BY Cl.id_client, Cl.nom, Cl.prenom;
```

**Exercice 2 :** Pour chaque produit, calculez la quantité totale qui a été vendue.
**Solution :**

```sql
SELECT P.nom, SUM(L.quantite) AS total_vendu
FROM Produit P
LEFT JOIN LigneCommande L ON P.id_prod = L.id_prod
GROUP BY P.id_prod, P.nom;
```

---

### 7. Requêtes Imbriquées (IN, EXISTS)

**Exercice 1 :** Trouvez les clients qui ont passé commande le 2023-11-02. (Utilisez `IN`).
**Solution :**

```sql
SELECT nom, prenom
FROM Client
WHERE id_client IN (
    SELECT id_client
    FROM Commande
    WHERE date_cmd = '2023-11-02'
);
```

**Exercice 2 :** Listez les produits dont le prix est supérieur au prix moyen de tous les produits. (Utilisez une sous-requête dans le `WHERE`).
**Solution :**

```sql
SELECT nom, prix
FROM Produit
WHERE prix > (
    SELECT AVG(prix)
    FROM Produit
);
```
