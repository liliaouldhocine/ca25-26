### **Interface Typique de MySQL Workbench pour l'UML**

Voici comment se présente l'interface quand vous créez un diagramme :

```
+-----------------------------------------------------------------------+
| [File] [Edit] [View] [Model] [Database] [Tools] [Help]                |
+----------------------+-----------------------------------------------+
| | [Table]            |                                               |
| | [1:1 Relationship] |                                               |
| | [1:n Relationship] |                                               |
| | [n:m Relationship] |                                               |
| | [Note]             |                                               |
| | [Layer]            |                                               |
| |                    |                                               |
| |PALETTE             |               CANVAS PRINCIPAL                |
| |                    |  +-----------------+  +-----------------+     |
| |                    |  |    Client       |  |    Commande     |     |
| |                    |  +-----------------+  +-----------------+     |
| |                    |  | id_client [PK]  |  | id_commande[PK] |     |
| |                    |  | nom VARCHAR(50) |  | date_cmd DATE   |     |
| |                    |  | email VARCHAR() |  | id_client [FK]  |     |
| |                    |  +-----------------+  +-----------------+     |
| |                    |                                               |
| |                    |      (Une flèche 1:n relie les deux tables)   |
+----------------------+-----------------------------------------------+
| [Catalog] | [Properties] | [Model Notes]                             |
+----------------------------------------------------------------------+
| Table: Client              | Properties de la table sélectionnée     |
| Columns: id_client, nom... | - Name: Client                          |
|                            | - Engine: InnoDB                        |
|                            | - Charset: utf8mb4                      |
+----------------------------------------------------------------------+
```

---

### **Guide Visuel Étape par Étape**

**ÉTAPE 1 : Créer une nouvelle table**

1. Cliquez sur l'icône **"Place a new table"** dans la palette (carré avec ligne)
2. Cliquez sur le canvas
3. Une fenêtre s'ouvre à droite :
   - **Table Name** : `Client`
   - **Columns** :
     - `id_client` : INT, PK, AI, NN ✓
     - `nom` : VARCHAR(50), NN ✓
     - `email` : VARCHAR(100), NN ✓

**ÉTAPE 2 : Créer une seconde table**

1. Répétez l'étape 1 pour `Commande`
2. Colonnes :
   - `id_commande` : INT, PK, AI, NN ✓
   - `date_cmd` : DATE, NN ✓
   - `id_client` : INT, NN ✓ (ce deviendra notre FK)

**ÉTAPE 3 : Établir la relation 1:n**

1. Cliquez sur **"1:n Relationship"** dans la palette
2. Cliquez d'abord sur la table **`Client`** (le "1")
3. Puis cliquez sur la table **`Commande`** (le "n")
4. **Résultat visuel** : Une flèche avec un cercle du côté de Commande apparaît

**ÉTAPE 4 : Personnalisation visuelle**

- **Clic droit sur Client** > Change Color → Bleu
- **Clic droit sur Commande** > Change Color → Vert
- **Glissez-déposez** les tables pour une disposition optimale

**ÉTAPE 5 : Vérification finale**
Votre canvas devrait maintenant montrer :

```
+-----------------+          +-----------------+
|    Client       |          |    Commande     |
|  (Bleu)         |  1    n  |   (Vert)        |
+-----------------+ -------> +-----------------+
| id_client [PK]  |          | id_commande[PK] |
| nom VARCHAR(50) |          | date_cmd DATE   |
| email VARCHAR() |          | id_client [FK]  |
+-----------------+          +-----------------+
```

---

### **Ce qui se passe en arrière-plan**

Quand vous établissez la relation, Workbench :

1. Ajoute automatiquement la colonne `id_client` dans `Commande` si elle n'existe pas
2. Crée la contrainte de clé étrangère
3. Met à jour le modèle physique en conséquence

---

### **Exportation et Sauvegarde**

Pour capturer visuellement votre diagramme :

1. **Zoom** : Ajustez avec la molette pour avoir une belle vue
2. **File > Export > Export as PNG** → Sauvegarde l'image
3. **File > Save Model** → Sauvegarde le projet `.mwb` pour pouvoir le modifier plus tard

District M :
9 janvier 2017
24 janvier 2020

Developpeur

Rogers : 10 février 2014 au 06 janvier 2017
Five du 27 août 2012 au 7 février 2014

Teccart : 4 aout 2023 au 27 aout 2024
-Technique de l’informatique : programmation Web et mobile et/ou
-Technique de l’informatique : réseautique infonuagique et sécurité
