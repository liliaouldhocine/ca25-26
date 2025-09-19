### 1. Accéder à l'Éditeur de Modèles

**Pour un nouveau projet :**

1. Ouvrez MySQL Workbench
2. Cliquez sur **File > New Model** (ou `Ctrl + N`)
3. Une fenêtre avec 3 onglets apparaît : **Physical Schemas**, **EER Diagrams**, **Model Overview**

**Pour un projet existant :**

1. **Reverse Engineering** (Générer le diagramme à partir d'une BDD existante) :
   - **Database > Reverse Engineer...** (`Ctrl + R`)
   - Suivez l'assistant en vous connectant à votre base
   - Sélectionnez les schémas/tables à importer

---

### 2. L'Interface Principale

Une fois dans l'onglet **EER Diagrams**, vous trouvez :

| Élément                 | Fonction                                        |
| ----------------------- | ----------------------------------------------- |
| **Palette** (à gauche)  | Outils pour ajouter des tables, relations, etc. |
| **Canvas** (centre)     | Zone de dessin où vous placez vos tables        |
| **Properties** (droite) | Propriétés de l'élément sélectionné             |
| **Catalog** (bas)       | Liste de toutes les tables et colonnes          |

---

### 3. Création des Tables

**Méthode 1 : Palette**

1. Cliquez sur l'icône **Place a New Table**
2. Cliquez sur le canvas pour placer la table
3. Remplissez les détails dans la fenêtre qui s'ouvre

**Méthode 2 : Add Table**

1. Clic droit sur le canvas > **Add Table**

**Remplir les détails de la table :**

```sql
-- Exemple de configuration dans la fenêtre de propriétés
Table Name: Client
Columns:
- id_client: INT, PK, AI, NN
- nom: VARCHAR(50), NN
- email: VARCHAR(100), NN, UQ
```

---

### 4. Création des Relations

C'est la partie la plus importante pour le diagramme UML !

**Types de relations disponibles :**

- **1:1** (One-to-One) : Une flèche simple
- **1:n** (One-to-Many) : Une flèche avec cercle
- **n:m** (Many-to-Many) : Crée automatiquement une table de liaison

**Procédure :**

1. Cliquez sur le type de relation dans la palette
2. Cliquez d'abord sur la table **parente** (qui contient la clé primaire)
3. Ensuite sur la table **enfant** (qui contiendra la clé étrangère)

**Exemple concret :** Client (1) → Commande (n)

1. Cliquez sur **1:n Relationship**
2. Cliquez sur la table `Client`
3. Cliquez sur la table `Commande`
4. Workbench crée automatiquement la clé étrangère `Client_id_client` dans `Commande`

---

### 5. Personnalisation Avancée

**Changer l'apparence :**

- **Clic droit sur une table > Change Color/Font** pour modifier les couleurs
- **Drag & Drop** pour réorganiser la disposition
- **Zoom** avec molette de souris pour une meilleure vue d'ensemble

**Ajouter des notes :**

- Utilisez l'outil **Note** dans la palette
- Parfait pour expliquer des contraintes complexes

**Groupes logiques :**

- Utilisez l'outil **Layer** pour regrouper des tables fonctionnellement
- Exemple : Groupe "Gestion Clients", "Gestion Commandes"

---

### 6. Validation du Modèle

**Vérifier la cohérence :**

1. **Model > Check Model** pour détecter les erreurs
2. Corrigez les problèmes signalés (clés étrangères manquantes, etc.)

**Exporter le diagramme :**

1. **File > Export** pour sauvegarder en PNG, PDF, SVG
2. **File > Save Model** pour sauvegarder le projet (.mwb)

---

### 7. Génération du SQL

**Du modèle vers la base de données :**

1. **Database > Forward Engineer...** (`Ctrl + G`)
2. Suivez l'assistant pour générer le script SQL
3. Choisissez les options de génération :
   - Ajouter `DROP TABLE` si exists
   - Générer les clés étrangères
   - Inclure les index

**Exemple de code généré :**

```sql
-- Le code généré par Workbench sera parfaitement formaté
CREATE TABLE IF NOT EXISTS `Client` (
  `id_client` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_client`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)
);

CREATE TABLE IF NOT EXISTS `Commande` (
  `id_commande` INT NOT NULL AUTO_INCREMENT,
  `date_cmd` DATE NOT NULL,
  `Client_id_client` INT NOT NULL,
  PRIMARY KEY (`id_commande`),
  INDEX `fk_Commande_Client_idx` (`Client_id_client` ASC),
  CONSTRAINT `fk_Commande_Client`
    FOREIGN KEY (`Client_id_client`)
    REFERENCES `Client` (`id_client`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);
```

---

### 8. Bonnes Pratiques

**Organisation visuelle :**

- Placez les tables principales au centre
- Groupez les tables par fonctionnalité
- Utilisez des couleurs cohérentes (bleu pour les clients, vert pour les produits, etc.)

**Nommage :**

- Utilisez des noms cohérents dans le diagramme et la base
- Workbench synchronise automatiquement les changements

**Documentation :**

- Ajoutez des notes pour expliquer les relations complexes
- Utilisez le champ "Comment" dans les propriétés des colonnes

---

### 9. Exemple Complet en Images

![VoirAutreFichier](https://github.com/liliaouldhocine/ca25-26-mysql/blob/main/interface-typique-de-MySQL-Workbench-UML.md)

_Exemple visuel de ce à quoi peut ressembler votre diagramme_

---

### 10. Tips et Raccourcis

- **Double-clic** sur une table pour éditer ses propriétés
- **Ctrl + Z** pour annuler (comme dans la plupart des logiciels)
- **Synchronisation** : Les modifications dans le diagramme se reflètent dans le modèle physique et vice versa
- **Reverse Engineering** régulier pour maintenir le diagramme à jour avec la base de production
