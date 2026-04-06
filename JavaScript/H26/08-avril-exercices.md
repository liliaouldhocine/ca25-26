# 2. Exercices progressifs avec corrigé

## JavaScript — Arrow functions, objets et méthodes de tableau

## Consignes générales

Pour chaque exercice :

- lisez attentivement ce qui est demandé ;
- essayez d’écrire votre solution avant de regarder le corrigé ;
- cherchez à comprendre pourquoi une méthode est plus adaptée qu’une autre.

---

## Exercice 1 — Transformer une fonction en arrow function

Transformez la fonction suivante en arrow function.

```js
function addition(a, b) {
  return a + b;
}
```

### Corrigé

```js
const addition = (a, b) => a + b;
```

### Explication

La fonction a deux paramètres et retourne directement une expression.
On peut donc utiliser la forme courte des arrow functions.

---

## Exercice 2 — Arrow function avec un seul paramètre

Écrivez une arrow function `carre` qui reçoit un nombre et retourne son carré.

### Corrigé

```js
const carre = (x) => x * x;
```

### Explication

Avec un seul paramètre, les parenthèses sont facultatives.
La fonction retourne directement `x * x`.

---

## Exercice 3 — Arrow function sur plusieurs lignes

Écrivez une arrow function `moyenne` qui reçoit deux nombres, calcule leur moyenne et la retourne en utilisant plusieurs lignes.

### Corrigé

```js
const moyenne = (a, b) => {
  const resultat = (a + b) / 2;
  return resultat;
};
```

### Explication

Quand on utilise des accolades, il faut écrire `return`.

---

## Exercice 4 — Lire et modifier un objet

On vous donne l’objet suivant :

```js
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  pages: 96,
};
```

Faites les actions suivantes :

1. affichez le titre ;
2. modifiez le nombre de pages pour mettre `100` ;
3. ajoutez une propriété `disponible` avec la valeur `true`.

### Corrigé

```js
console.log(livre.titre);

livre.pages = 100;
livre.disponible = true;

console.log(livre);
```

### Explication

- `livre.titre` permet d’accéder à la propriété `titre` ;
- `livre.pages = 100` modifie la valeur existante ;
- `livre.disponible = true` ajoute une nouvelle propriété.

---

## Exercice 5 — Parcourir un objet

Affichez toutes les propriétés et toutes les valeurs de l’objet suivant :

```js
const personne = {
  nom: "Maya",
  age: 22,
  ville: "Laval",
};
```

### Corrigé

```js
for (const cle in personne) {
  console.log(cle, personne[cle]);
}
```

### Explication

La boucle `for...in` parcourt les propriétés de l’objet.
On utilise `personne[cle]` pour accéder à la valeur associée.

---

## Exercice 6 — `forEach()`

À partir du tableau suivant, affichez chaque fruit dans la console :

```js
const fruits = ["pomme", "banane", "orange"];
```

### Corrigé

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

### Explication

`forEach()` sert à exécuter une action pour chaque élément du tableau.

---

## Exercice 7 — `map()`

À partir du tableau suivant, créez un nouveau tableau contenant les doubles :

```js
const nombres = [2, 4, 6];
```

### Corrigé

```js
const doubles = nombres.map((nombre) => nombre * 2);
console.log(doubles);
```

### Résultat attendu

```js
[4, 8, 12];
```

### Explication

`map()` sert à transformer chaque valeur du tableau.

---

## Exercice 8 — `filter()`

À partir du tableau suivant, gardez seulement les nombres supérieurs à 10 :

```js
const valeurs = [4, 15, 8, 22, 9, 30];
```

### Corrigé

```js
const grandesValeurs = valeurs.filter((valeur) => valeur > 10);
console.log(grandesValeurs);
```

### Résultat attendu

```js
[15, 22, 30];
```

### Explication

`filter()` conserve uniquement les éléments qui respectent la condition.

---

## Exercice 9 — `find()`

Trouvez le premier nombre pair dans le tableau suivant :

```js
const nombres = [3, 7, 9, 10, 12];
```

### Corrigé

```js
const premierPair = nombres.find((nombre) => nombre % 2 === 0);
console.log(premierPair);
```

### Résultat attendu

```js
10;
```

### Explication

`find()` retourne le premier élément qui valide la condition.

---

## Exercice 10 — `some()` et `every()`

On vous donne :

```js
const notes = [55, 62, 71, 48];
```

1. Vérifiez s’il existe au moins une note supérieure ou égale à 60.
2. Vérifiez si toutes les notes sont supérieures ou égales à 60.

### Corrigé

```js
const auMoinsUneReussite = notes.some((note) => note >= 60);
const toutesLesReussites = notes.every((note) => note >= 60);

console.log(auMoinsUneReussite);
console.log(toutesLesReussites);
```

### Résultat attendu

```js
true;
false;
```

### Explication

- `some()` vérifie si au moins un élément respecte la condition ;
- `every()` vérifie si tous les éléments la respectent.

---

## Exercice 11 — `reduce()`

Calculez la somme de tous les nombres du tableau suivant :

```js
const nombres = [5, 10, 15, 20];
```

### Corrigé

```js
const somme = nombres.reduce((acc, valeur) => acc + valeur, 0);
console.log(somme);
```

### Résultat attendu

```js
50;
```

### Explication

`reduce()` parcourt le tableau et accumule une valeur finale.
Ici, on additionne toutes les valeurs à partir de `0`.

---

## Exercice 12 — Tableau d’objets

On vous donne :

```js
const etudiants = [
  { nom: "Lina", note: 78 },
  { nom: "Adam", note: 54 },
  { nom: "Sara", note: 88 },
  { nom: "Yanis", note: 61 },
];
```

1. Gardez seulement les étudiants qui ont une note supérieure ou égale à 60.
2. Créez ensuite un tableau contenant seulement leurs noms.

### Corrigé

```js
const reussites = etudiants.filter((etudiant) => etudiant.note >= 60);
const noms = reussites.map((etudiant) => etudiant.nom);

console.log(noms);
```

### Résultat attendu

```js
["Lina", "Sara", "Yanis"];
```

### Explication

- `filter()` sert à sélectionner les étudiants qui ont réussi ;
- `map()` sert ensuite à extraire seulement leur nom.

---

## Exercice 13 — Propriété d’objet et méthode `map()`

On vous donne :

```js
const produits = [
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 7 },
  { nom: "Sac", prix: 25 },
];
```

Créez un tableau contenant seulement les noms des produits.

### Corrigé

```js
const nomsProduits = produits.map((produit) => produit.nom);
console.log(nomsProduits);
```

### Résultat attendu

```js
["Stylo", "Cahier", "Sac"];
```

---

## Exercice 14 — Filtrer des objets

Toujours avec le même tableau :

```js
const produits = [
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 7 },
  { nom: "Sac", prix: 25 },
];
```

Gardez seulement les produits qui coûtent moins de 10.

### Corrigé

```js
const produitsAbordables = produits.filter((produit) => produit.prix < 10);
console.log(produitsAbordables);
```

### Résultat attendu

```js
[
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 7 },
];
```

---

## Exercice 15 — Exercice de synthèse

On vous donne :

```js
const films = [
  { titre: "Inception", duree: 148, vu: true },
  { titre: "Coco", duree: 105, vu: false },
  { titre: "Interstellar", duree: 169, vu: true },
  { titre: "Up", duree: 96, vu: false },
];
```

Faites les opérations suivantes :

1. gardez seulement les films déjà vus ;
2. créez un tableau contenant seulement leurs titres ;
3. vérifiez si au moins un film dure plus de 160 minutes.

### Corrigé

```js
const filmsVus = films.filter((film) => film.vu === true);
const titresFilmsVus = filmsVus.map((film) => film.titre);
const filmTresLong = films.some((film) => film.duree > 160);

console.log(titresFilmsVus);
console.log(filmTresLong);
```

### Résultat attendu

```js
["Inception", "Interstellar"];
true;
```

### Explication

Cet exercice mélange plusieurs notions importantes :

- tableau d’objets ;
- `filter()` ;
- `map()` ;
- `some()` ;
- arrow functions.

---

# 3. Questions de réflexion

1. Pourquoi `map()` est-il plus adapté que `forEach()` quand on veut créer un nouveau tableau ?
2. Pourquoi un objet est-il plus pratique que plusieurs variables séparées pour représenter un étudiant ?
3. Dans quel cas utiliser `find()` plutôt que `filter()` ?
4. Pourquoi faut-il parfois écrire `return` dans une arrow function ?
5. Quelle méthode choisiriez-vous pour calculer une somme totale dans un tableau ?

---

# 4. Petit résumé final

Retenez cette logique :

- `forEach()` : je parcours ;
- `map()` : je transforme ;
- `filter()` : je sélectionne ;
- `find()` : je cherche le premier ;
- `some()` : je vérifie s’il y en a au moins un ;
- `every()` : je vérifie si tous respectent une condition ;
- `reduce()` : je résume tout en une seule valeur.

Et retenez aussi :

- une arrow function est une façon courte d’écrire une fonction ;
- un objet sert à regrouper des informations ;
- un tableau sert à stocker plusieurs éléments ;
- les méthodes de tableau permettent de traiter les données plus clairement.

---
