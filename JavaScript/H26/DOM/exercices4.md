# Exercices — Les storages en JavaScript

## Objectif

Ces exercices ont pour but de vous aider à mieux comprendre comment JavaScript peut :

- enregistrer des données dans le navigateur
- relire ces données plus tard
- distinguer `localStorage` et `sessionStorage`
- supprimer une donnée enregistrée
- utiliser `JSON.stringify()` et `JSON.parse()`
- relier le storage au DOM pour conserver un état dans une page web

## Consignes générales

Pour chaque exercice :

- lisez attentivement le code HTML fourni
- complétez le fichier JavaScript demandé
- testez votre code dans le navigateur
- rechargez la page lorsque demandé
- observez ce qui reste enregistré et ce qui disparaît

---

# Exercice 1 — Enregistrer une valeur simple dans `localStorage`

## Objectif

Découvrir `setItem()` et `getItem()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 1</title>
  </head>
  <body>
    <button id="saveBtn">Enregistrer une ville</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le bouton et le paragraphe.
2. Au clic sur le bouton :
   - enregistrez la valeur `"Montréal"` dans `localStorage` avec la clé `"city"`
   - relisez cette valeur avec `getItem()`
   - affichez dans le paragraphe :
     `Ville enregistrée : Montréal`

---

# Exercice 2 — Lire une donnée déjà enregistrée au chargement

## Objectif

Comprendre qu’une donnée peut être retrouvée après rechargement.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 2</title>
  </head>
  <body>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Lisez la valeur enregistrée sous la clé `"city"` dans `localStorage`.
2. Si cette valeur existe, affichez dans le paragraphe :
   `Ville trouvée : ...`
3. Sinon, affichez :
   `Aucune ville enregistrée.`

## À faire

Testez d’abord avec une donnée déjà présente dans `localStorage`, puis rechargez la page.

---

# Exercice 3 — Enregistrer le contenu d’un champ texte

## Objectif

Relier formulaire simple et `localStorage`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 3</title>
  </head>
  <body>
    <input id="nameInput" type="text" placeholder="Votre prénom" />
    <button id="saveBtn">Enregistrer</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le champ, le bouton et le paragraphe.
2. Quand l’utilisateur clique sur le bouton :
   - enregistrez le contenu du champ dans `localStorage` avec la clé `"firstName"`
   - affichez dans le paragraphe :
     `Prénom enregistré : ...`

---

# Exercice 4 — Réafficher un prénom enregistré au chargement

## Objectif

Utiliser `getItem()` au bon moment.

## Code de départ

Reprenez le code HTML de l’exercice 3.

## Travail demandé

Dans `script.js` :

1. Lisez la donnée enregistrée sous la clé `"firstName"`.
2. Si elle existe :
   - affichez dans le paragraphe :
     `Bonjour ...`
   - remettez aussi cette valeur dans le champ `input`

3. Laissez l’enregistrement par bouton fonctionner aussi

## À observer

Rechargez la page après avoir enregistré un prénom.

---

# Exercice 5 — Supprimer une donnée avec `removeItem()`

## Objectif

Apprendre à supprimer une donnée précise.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 5</title>
  </head>
  <body>
    <input id="nameInput" type="text" placeholder="Votre prénom" />
    <button id="saveBtn">Enregistrer</button>
    <button id="deleteBtn">Supprimer</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Faites fonctionner le bouton `Enregistrer` avec la clé `"firstName"`.
2. Ajoutez un événement `click` sur le bouton `Supprimer`.
3. Quand l’utilisateur clique :
   - supprimez la clé `"firstName"` de `localStorage`
   - videz le champ texte
   - affichez :
     `Prénom supprimé.`

---

# Exercice 6 — Comparer `localStorage` et `sessionStorage`

## Objectif

Observer la différence de durée entre les deux.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 6</title>
  </head>
  <body>
    <button id="localBtn">Enregistrer dans localStorage</button>
    <button id="sessionBtn">Enregistrer dans sessionStorage</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Au clic sur `localBtn`, enregistrez `"dark"` avec la clé `"theme"` dans `localStorage`.
2. Au clic sur `sessionBtn`, enregistrez `"dark"` avec la clé `"theme"` dans `sessionStorage`.
3. Après chaque clic, affichez dans le paragraphe quel storage a été utilisé.

## À tester

- rechargez la page
- fermez puis rouvrez l’onglet
- observez lequel conserve la donnée le plus longtemps

---

# Exercice 7 — Stocker un tableau avec `JSON.stringify()`

## Objectif

Comprendre pourquoi un tableau doit être converti en texte.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 7</title>
  </head>
  <body>
    <button id="saveBtn">Enregistrer les fruits</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Créez un tableau contenant :
   - `"pomme"`
   - `"banane"`
   - `"orange"`

2. Au clic sur le bouton :
   - enregistrez ce tableau dans `localStorage` sous la clé `"fruits"` avec `JSON.stringify()`
   - affichez :
     `Tableau enregistré.`

---

# Exercice 8 — Relire un tableau avec `JSON.parse()`

## Objectif

Retrouver un vrai tableau à partir du storage.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 8</title>
  </head>
  <body>
    <ul id="fruitList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Lisez la valeur associée à la clé `"fruits"` dans `localStorage`.
2. Si elle existe :
   - transformez-la en tableau avec `JSON.parse()`
   - affichez chaque fruit dans un élément `li` à l’intérieur de la liste `ul`

## Question de réflexion

Pourquoi `JSON.parse()` est-il nécessaire ici ?

---

# Exercice 9 — Stocker un objet

## Objectif

Sauvegarder un objet JavaScript dans `localStorage`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 9</title>
  </head>
  <body>
    <button id="saveBtn">Enregistrer l'utilisateur</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Créez un objet :

```js
const user = {
  name: "Lina",
  age: 17,
};
```

2. Au clic sur le bouton :
   - enregistrez cet objet dans `localStorage` avec la clé `"user"`
   - utilisez `JSON.stringify()`
   - affichez :
     `Utilisateur enregistré.`

---

# Exercice 10 — Relire un objet et afficher une information

## Objectif

Utiliser `JSON.parse()` avec un objet.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 10</title>
  </head>
  <body>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Lisez la donnée associée à la clé `"user"` dans `localStorage`.
2. Si elle existe :
   - transformez-la en objet avec `JSON.parse()`
   - affichez dans le paragraphe :
     `Nom : ... | Âge : ...`

3. Sinon, affichez :
   `Aucun utilisateur enregistré.`

---

# Exercice 11 — Petit défi intégrateur : mini liste de tâches persistante

## Objectif

Relier formulaire, DOM, tableau et `localStorage`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 11</title>
  </head>
  <body>
    <input id="taskInput" type="text" placeholder="Nouvelle tâche" />
    <button id="addBtn">Ajouter</button>
    <ul id="taskList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Créez un tableau `tasks` vide.
2. Au chargement de la page :
   - lisez la clé `"tasks"` dans `localStorage`
   - si elle existe, transformez-la en tableau avec `JSON.parse()`
   - affichez chaque tâche dans un `li`

3. Quand l’utilisateur clique sur `Ajouter` :
   - vérifiez que le champ n’est pas vide
   - ajoutez la nouvelle tâche dans le tableau
   - enregistrez le tableau mis à jour avec `JSON.stringify()`
   - ajoutez un nouvel élément `li` dans la page
   - videz le champ texte

## À observer

Ajoutez plusieurs tâches puis rechargez la page.

---

# Exercice 12 — Vider complètement le storage

## Objectif

Découvrir `clear()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 12</title>
  </head>
  <body>
    <button id="clearBtn">Tout supprimer</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le bouton et le paragraphe.
2. Au clic sur le bouton :
   - videz complètement `localStorage`
   - affichez :
     `Le localStorage a été vidé.`

## Attention

Cette action supprime toutes les données enregistrées dans `localStorage` pour ce site.

---

# Questions de synthèse

Après avoir terminé les exercices, répondez brièvement aux questions suivantes :

1. À quoi sert un storage dans le navigateur ?
2. Quelle est la différence entre `localStorage` et `sessionStorage` ?
3. À quoi sert `setItem()` ?
4. À quoi sert `getItem()` ?
5. À quoi sert `removeItem()` ?
6. À quoi sert `clear()` ?
7. Pourquoi faut-il utiliser `JSON.stringify()` pour un tableau ou un objet ?
8. Pourquoi faut-il utiliser `JSON.parse()` lorsqu’on relit un tableau ou un objet ?
9. Quelle différence y a-t-il entre une variable JavaScript et une donnée enregistrée dans `localStorage` ?
10. Pourquoi le storage devient-il plus intéressant lorsqu’on le relie au DOM ?

---

# Suggestion d’ordre de réalisation

Pour progresser plus facilement, faites les exercices dans cet ordre :

1. Exercice 1
2. Exercice 2
3. Exercice 3
4. Exercice 4
5. Exercice 5
6. Exercice 6
7. Exercice 7
8. Exercice 8
9. Exercice 9
10. Exercice 10
11. Exercice 11
12. Exercice 12

---
