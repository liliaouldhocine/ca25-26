# 1. JavaScript — Arrow functions, objets et méthodes de tableau

## Objectifs du cours

À la fin de ce cours, vous devriez être capables de :

- comprendre à quoi servent les arrow functions ;
- manipuler des objets en JavaScript ;
- utiliser les principales méthodes de tableau ;
- choisir la bonne méthode selon le besoin ;
- lire et écrire du code JavaScript moderne plus facilement.

---

## 1. Pourquoi ces notions sont importantes

En JavaScript, on travaille presque toujours avec trois grandes idées :

- des **fonctions**, pour effectuer des actions ;
- des **objets**, pour regrouper des informations ;
- des **tableaux**, pour stocker plusieurs valeurs.

Ces notions sont fondamentales parce qu’elles apparaissent partout :

- dans le développement web ;
- dans la manipulation de données ;
- dans les interfaces utilisateur ;
- dans les frameworks modernes comme React ;
- dans les projets complets côté client et côté serveur.

Comprendre ces concepts ne sert donc pas seulement à réussir un exercice. Cela sert à mieux programmer de manière générale.

---

# 2. Les arrow functions

## 2.1 Qu’est-ce qu’une arrow function ?

Une arrow function est une manière plus courte d’écrire une fonction.

Fonction classique :

```js
function addition(a, b) {
  return a + b;
}
```

Arrow function :

```js
const addition = (a, b) => {
  return a + b;
};
```

Version courte :

```js
const addition = (a, b) => a + b;
```

## 2.2 Pourquoi cette syntaxe existe

Les arrow functions ont été introduites pour :

- écrire des fonctions plus rapidement ;
- rendre certaines expressions plus lisibles ;
- simplifier le travail avec les tableaux ;
- favoriser un style de programmation moderne.

Elles sont particulièrement utiles quand la fonction est courte.

Exemple :

```js
const carre = (x) => x * x;
```

Ici, on comprend tout de suite que la fonction prend `x` et retourne son carré.

## 2.3 Comment lire une arrow function

Dans l’exemple suivant :

```js
const multiplier = (a, b) => a * b;
```

on peut lire :

- `const multiplier =` : on crée une constante qui contient une fonction ;
- `(a, b)` : ce sont les paramètres ;
- `=>` : sépare les paramètres du résultat ;
- `a * b` : valeur retournée.

Autrement dit : `multiplier` est une fonction qui reçoit `a` et `b`, puis retourne leur produit.

## 2.4 Syntaxes à connaître

### Aucun paramètre

```js
const saluer = () => "Bonjour";
```

### Un seul paramètre

```js
const cube = (x) => x * x * x;
```

### Plusieurs paramètres

```js
const soustraction = (a, b) => a - b;
```

### Plusieurs lignes

```js
const calcul = (a, b) => {
  const resultat = a + b;
  return resultat;
};
```

## 2.5 Retour implicite et explicite

Sans accolades, le retour est implicite :

```js
const double = (x) => x * 2;
```

Avec accolades, il faut écrire `return` :

```js
const double = (x) => {
  return x * 2;
};
```

C’est une erreur très fréquente d’oublier `return`.

Exemple incorrect :

```js
const resultat = [1, 2, 3].map((n) => {
  n * 2;
});
```

Ce code renvoie un tableau de `undefined`, car rien n’est retourné.

Correction :

```js
const resultat = [1, 2, 3].map((n) => {
  return n * 2;
});
```

ou plus simplement :

```js
const resultat = [1, 2, 3].map((n) => n * 2);
```

## 2.6 Quand utiliser une arrow function

Les arrow functions sont très utiles pour :

- des fonctions courtes ;
- des transformations rapides ;
- des callbacks dans les tableaux ;
- du code concis et moderne.

Exemple :

```js
const notes = [60, 75, 90];
const notesBonifiees = notes.map((note) => note + 5);
```

## 2.7 Limite importante

Les arrow functions ne remplacent pas toutes les fonctions classiques.
Elles ont un comportement particulier avec `this`.

Pour ce cours, retenez surtout ceci :

- utilisez-les pour des fonctions simples ;
- soyez prudents quand vous les mettez dans des objets comme méthodes.

---

# 3. La manipulation d’objets

## 3.1 Qu’est-ce qu’un objet ?

Un objet permet de regrouper plusieurs informations liées à une même entité.

Exemple :

```js
const etudiant = {
  nom: "Sara",
  age: 19,
  programme: "Informatique",
};
```

Ici, `etudiant` contient trois propriétés :

- `nom`
- `age`
- `programme`

Chaque propriété possède une valeur.

## 3.2 Pourquoi utiliser un objet ?

Un objet est utile quand plusieurs informations parlent de la même chose.

Par exemple, au lieu d’écrire :

```js
const nom = "Sara";
const age = 19;
const programme = "Informatique";
```

on préfère écrire :

```js
const etudiant = {
  nom: "Sara",
  age: 19,
  programme: "Informatique",
};
```

Cette structure est meilleure parce que :

- les données sont regroupées ;
- le code est plus logique ;
- on comprend qu’il s’agit d’un seul étudiant ;
- la manipulation devient plus simple.

## 3.3 Accéder aux propriétés

### Avec la notation point

```js
console.log(etudiant.nom);
```

### Avec la notation crochets

```js
console.log(etudiant["age"]);
```

Les deux sont valides.

La notation point est souvent plus simple à lire.
La notation crochets est utile lorsque le nom de la propriété est stocké dans une variable.

Exemple :

```js
const propriete = "programme";
console.log(etudiant[propriete]);
```

## 3.4 Modifier, ajouter et supprimer

### Modifier une propriété

```js
etudiant.age = 20;
```

### Ajouter une propriété

```js
etudiant.ville = "Montréal";
```

### Supprimer une propriété

```js
delete etudiant.programme;
```

## 3.5 Parcourir un objet

```js
const personne = {
  nom: "Maya",
  age: 22,
  ville: "Laval",
};

for (const cle in personne) {
  console.log(cle, personne[cle]);
}
```

Cette boucle permet de lire toutes les propriétés d’un objet.

## 3.6 Méthodes utiles sur les objets

### `Object.keys()`

Renvoie les noms des propriétés.

```js
console.log(Object.keys(personne));
```

### `Object.values()`

Renvoie les valeurs.

```js
console.log(Object.values(personne));
```

### `Object.entries()`

Renvoie des paires `[clé, valeur]`.

```js
console.log(Object.entries(personne));
```

Ces méthodes sont utiles pour explorer ou parcourir les objets plus facilement.

## 3.7 Destructuration

La destructuration permet d’extraire rapidement des propriétés dans des variables.

```js
const voiture = {
  marque: "Toyota",
  annee: 2020,
};

const { marque, annee } = voiture;
```

Cela revient à écrire :

```js
const marque = voiture.marque;
const annee = voiture.annee;
```

C’est plus court et souvent plus lisible.

## 3.8 Erreur fréquente : objet ou tableau ?

Un objet :

```js
const personne = { nom: "Eva", age: 20 };
```

Un tableau :

```js
const notes = [70, 85, 90];
```

Différence importante :

- un tableau se parcourt par indice ;
- un objet se parcourt par propriété.

---

# 4. Les méthodes de tableau

## 4.1 Pourquoi les méthodes de tableau sont essentielles

Un tableau sert à stocker plusieurs valeurs :

```js
const notes = [70, 82, 91, 65];
```

Mais, dans un vrai programme, on ne veut pas seulement stocker ces données.
On veut aussi :

- les parcourir ;
- les transformer ;
- en sélectionner certaines ;
- en trouver une ;
- faire un calcul global.

C’est précisément le rôle des méthodes de tableau.

---

## 4.2 `forEach()`

### Rôle

`forEach()` sert à exécuter une action pour chaque élément.

```js
const nombres = [1, 2, 3];

nombres.forEach((nombre) => {
  console.log(nombre);
});
```

### À retenir

`forEach()` sert à faire quelque chose, mais ne crée pas un nouveau tableau.

On l’utilise par exemple pour :

- afficher des valeurs ;
- écrire dans la page ;
- exécuter une action répétée.

---

## 4.3 `map()`

### Rôle

`map()` transforme chaque élément d’un tableau et retourne un nouveau tableau.

```js
const nombres = [1, 2, 3];
const carres = nombres.map((nombre) => nombre * nombre);

console.log(carres); // [1, 4, 9]
```

### Pourquoi c’est important

`map()` est très utile quand on veut produire une nouvelle version d’un tableau.

Exemples :

- mettre des mots en majuscules ;
- ajouter une taxe à chaque prix ;
- extraire les noms d’un tableau d’objets ;
- convertir des données.

---

## 4.4 `filter()`

### Rôle

`filter()` garde seulement les éléments qui respectent une condition.

```js
const nombres = [1, 2, 3, 4, 5, 6];
const pairs = nombres.filter((nombre) => nombre % 2 === 0);

console.log(pairs); // [2, 4, 6]
```

### Pourquoi c’est important

On filtre très souvent en programmation :

- les étudiants qui ont réussi ;
- les produits en stock ;
- les messages non lus ;
- les utilisateurs actifs.

`filter()` permet d’exprimer clairement cette intention.

---

## 4.5 `find()`

### Rôle

`find()` retourne le premier élément qui respecte une condition.

```js
const nombres = [4, 7, 10, 13];
const resultat = nombres.find((nombre) => nombre > 8);

console.log(resultat); // 10
```

### Différence avec `filter()`

- `filter()` retourne plusieurs éléments sous forme de tableau ;
- `find()` retourne un seul élément, le premier trouvé.

---

## 4.6 `some()`

### Rôle

`some()` vérifie si au moins un élément respecte une condition.

```js
const notes = [45, 70, 82];
const reussite = notes.some((note) => note >= 60);

console.log(reussite); // true
```

Utile pour répondre à des questions du type :

- y a-t-il au moins un retard ?
- existe-t-il une erreur ?
- au moins un étudiant a-t-il réussi ?

---

## 4.7 `every()`

### Rôle

`every()` vérifie si tous les éléments respectent une condition.

```js
const notes = [65, 70, 82];
const toutesReussies = notes.every((note) => note >= 60);

console.log(toutesReussies); // true
```

Utile pour répondre à des questions du type :

- tous les devoirs sont-ils remis ?
- toutes les notes sont-elles suffisantes ?

---

## 4.8 `reduce()`

### Rôle

`reduce()` combine tous les éléments pour produire une seule valeur.

```js
const nombres = [1, 2, 3, 4];

const somme = nombres.reduce((acc, valeur) => {
  return acc + valeur;
}, 0);

console.log(somme); // 10
```

### Pourquoi cette méthode est importante

`reduce()` sert à :

- faire une somme ;
- faire un total ;
- compter ;
- construire un objet ;
- résumer un tableau.

Elle est un peu plus difficile au début, mais très puissante.

---

# 5. Bien choisir la bonne méthode

Quand vous voyez un tableau, posez-vous cette question :

- veux-je simplement parcourir ? `forEach()`
- veux-je transformer ? `map()`
- veux-je sélectionner ? `filter()`
- veux-je trouver un seul élément ? `find()`
- veux-je vérifier une condition ? `some()` ou `every()`
- veux-je obtenir une seule valeur finale ? `reduce()`

---

# 6. Exemple complet

```js
const etudiants = [
  { nom: "Lina", note: 78 },
  { nom: "Adam", note: 54 },
  { nom: "Sara", note: 88 },
];

const reussites = etudiants.filter((etudiant) => etudiant.note >= 60);
const noms = reussites.map((etudiant) => etudiant.nom);

console.log(noms); // ["Lina", "Sara"]
```

Dans cet exemple, on combine :

- un tableau ;
- des objets ;
- des arrow functions ;
- `filter()` ;
- `map()`.

C’est un excellent exemple de JavaScript moderne.

---

# 7. Erreurs fréquentes

## Oublier `return`

```js
const doubles = [1, 2, 3].map((n) => {
  n * 2;
});
```

Ici, le résultat est incorrect.

## Confondre `map()` et `forEach()`

`map()` sert à créer un nouveau tableau.
`forEach()` sert à exécuter une action.

## Confondre `filter()` et `find()`

`filter()` peut retourner plusieurs résultats.
`find()` retourne seulement le premier.

## Confondre objet et tableau

Un objet utilise des propriétés nommées.
Un tableau utilise des indices numériques.

---

# 8. Conclusion

Les arrow functions, les objets et les méthodes de tableau sont des bases essentielles du JavaScript moderne.

Les comprendre permet :

- d’écrire du code plus lisible ;
- de mieux structurer ses données ;
- de choisir le bon outil selon la tâche ;
- de mieux lire le code rencontré dans des projets réels.

L’objectif n’est pas seulement de retenir la syntaxe, mais aussi de comprendre l’intention :

- une fonction agit ;
- un objet organise ;
- un tableau rassemble ;
- une méthode traite les données selon un besoin précis.

---
