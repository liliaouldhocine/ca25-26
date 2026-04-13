# Les erreurs les plus fréquentes en JavaScript

## Objectif du document

Ce document a pour but de vous aider à :

- reconnaître les erreurs les plus fréquentes en JavaScript
- comprendre pourquoi elles se produisent
- apprendre à mieux les éviter
- développer de meilleurs réflexes de lecture, de test et de débogage

En JavaScript, beaucoup d’erreurs ne viennent pas de notions très complexes.
Elles viennent souvent de petites confusions :

- confondre une variable et sa valeur
- oublier de sélectionner un élément du DOM
- mal utiliser une méthode
- oublier qu’un événement se déclenche dans un certain contexte
- oublier qu’une donnée du storage est du texte

L’objectif n’est donc pas seulement de “corriger du code”, mais aussi d’apprendre à **penser plus clairement ce que le programme est censé faire**.

---

# 1. Erreurs générales de débutants

## 1.1 Utiliser une variable qui n’existe pas

### Exemple fautif

```js
title.textContent = "Bonjour";
```

### Problème

La variable `title` n’a jamais été déclarée.

### Correction

```js
const title = document.getElementById("title");
title.textContent = "Bonjour";
```

### Idée à retenir

Avant d’utiliser une variable, il faut l’avoir déclarée et lui avoir donné une valeur.

---

## 1.2 Confondre le nom d’une variable et une chaîne de caractères

### Exemple fautif

```js
const name = Lina;
```

### Problème

`Lina` est interprété comme une variable, pas comme du texte.

### Correction

```js
const name = "Lina";
```

### Idée à retenir

Le texte doit être mis entre guillemets.

---

## 1.3 Oublier la différence entre `=` et `===`

### Exemple fautif

```js
if ((age = 18)) {
  console.log("Majeur");
}
```

### Problème

`=` sert à affecter une valeur, pas à comparer.

### Correction

```js
if (age === 18) {
  console.log("Majeur");
}
```

### Idée à retenir

- `=` : on donne une valeur
- `===` : on compare deux valeurs

---

## 1.4 Penser qu’une erreur signifie forcément que tout est faux

C’est une erreur très fréquente chez les étudiants : dès qu’un message rouge apparaît, ils pensent que tout le code est mauvais.

En réalité, une seule petite erreur peut bloquer tout le reste.

### Bon réflexe

- lire le message d’erreur
- repérer la ligne indiquée
- vérifier les variables, parenthèses, accolades et noms utilisés

---

# 2. Erreurs fréquentes avec les fonctions fléchées

## 2.1 Oublier qu’une fonction fléchée reste une fonction

### Exemple fautif

```js
const sayHello = "Bonjour";
sayHello();
```

### Problème

Ici, `sayHello` contient une chaîne, pas une fonction.

### Correction

```js
const sayHello = () => {
  console.log("Bonjour");
};

sayHello();
```

---

## 2.2 Oublier les parenthèses d’appel

### Exemple fautif

```js
const greet = () => {
  console.log("Salut");
};

greet;
```

### Problème

Ici, on référence la fonction, mais on ne l’exécute pas.

### Correction

```js
greet();
```

---

## 2.3 Confondre retour implicite et bloc de code

### Exemple fautif

```js
const double = (n) => {
  n * 2;
};
```

### Problème

La fonction ne retourne rien.

### Correction

```js
const double = (n) => {
  return n * 2;
};
```

ou

```js
const double = (n) => n * 2;
```

### Idée à retenir

Avec des accolades, il faut souvent écrire `return`.

---

## 2.4 Mal comprendre `this` avec les fonctions fléchées

Les fonctions fléchées ne créent pas leur propre `this`.

C’est une source de confusion très fréquente.

### Erreur fréquente

Les étudiants utilisent une fonction fléchée dans un objet en pensant que `this` désignera l’objet.

### Exemple problématique

```js
const user = {
  name: "Lina",
  sayName: () => {
    console.log(this.name);
  },
};
```

### Pourquoi c’est un problème

Ici, `this` ne désigne pas l’objet `user` comme on pourrait l’espérer.

### Version plus sûre

```js
const user = {
  name: "Lina",
  sayName() {
    console.log(this.name);
  },
};
```

### Idée à retenir

Les fonctions fléchées sont très utiles, mais pas dans tous les contextes.
Pour les méthodes d’objet, il faut être prudent avec `this`.

---

# 3. Erreurs fréquentes avec les objets

## 3.1 Oublier la syntaxe clé / valeur

### Exemple fautif

```js
const user = {
  name = "Lina",
  age = 17
};
```

### Problème

Dans un objet, on utilise `:` et non `=`.

### Correction

```js
const user = {
  name: "Lina",
  age: 17,
};
```

---

## 3.2 Confondre point et crochets

Les deux syntaxes existent, mais elles ne servent pas toujours de la même manière.

### Exemple correct

```js
user.name;
```

### Exemple correct aussi

```js
user["name"];
```

### Erreur fréquente

```js
user[name];
```

### Problème

Ici, JavaScript pense que `name` est une variable.

### Idée à retenir

- `user.name` : pour une propriété connue
- `user["name"]` : pour une clé écrite comme texte
- `user[key]` : quand `key` est une variable contenant le nom de propriété

---

## 3.3 Penser qu’un objet est une liste ordonnée

Les étudiants traitent parfois l’objet comme un tableau.

### Exemple problématique

```js
console.log(user[0]);
```

### Problème

Un objet classique n’est pas indexé comme un tableau.

### Idée à retenir

- tableau : éléments rangés par position
- objet : informations rangées par propriété

---

# 4. Erreurs fréquentes avec les méthodes de tableau

## 4.1 Utiliser `map()` sans comprendre qu’il retourne un nouveau tableau

### Exemple fautif

```js
const numbers = [1, 2, 3];
numbers.map((n) => n * 2);
console.log(numbers);
```

### Problème

`map()` ne modifie pas directement le tableau d’origine dans ce cas.

### Correction

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
```

---

## 4.2 Utiliser `forEach()` en pensant obtenir un nouveau tableau

### Exemple fautif

```js
const numbers = [1, 2, 3];
const doubled = numbers.forEach((n) => n * 2);
console.log(doubled);
```

### Problème

`forEach()` ne retourne pas le nouveau tableau attendu.

### Idée à retenir

- `forEach()` : parcourir
- `map()` : transformer et retourner un nouveau tableau

---

## 4.3 Oublier que `filter()` attend une condition

### Exemple fautif

```js
const result = numbers.filter((n) => {
  n > 2;
});
```

### Problème

La fonction ne retourne rien.

### Correction

```js
const result = numbers.filter((n) => {
  return n > 2;
});
```

ou

```js
const result = numbers.filter((n) => n > 2);
```

---

## 4.4 Mélanger les rôles de `map()`, `filter()` et `find()`

C’est une confusion extrêmement fréquente.

### À retenir

- `map()` transforme chaque élément
- `filter()` garde plusieurs éléments selon une condition
- `find()` retourne le premier élément qui respecte une condition

---

# 5. Erreurs fréquentes avec le DOM

## 5.1 Oublier de sélectionner l’élément avant de le modifier

### Exemple fautif

```js
message.textContent = "Bonjour";
```

### Correction

```js
const message = document.getElementById("message");
message.textContent = "Bonjour";
```

---

## 5.2 Se tromper dans le sélecteur

### Exemple fautif

```js
document.querySelector("title");
```

### Problème

Cela sélectionne une balise `<title>`, pas un élément avec `id="title"`.

### Correction

```js
document.querySelector("#title");
```

---

## 5.3 Confondre `querySelector()` et `querySelectorAll()`

### Exemple fautif

```js
const items = document.querySelectorAll(".item");
items.textContent = "Test";
```

### Problème

`querySelectorAll()` retourne plusieurs éléments.

### Correction

```js
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.textContent = "Test";
});
```

---

## 5.4 Modifier `innerHTML` sans bien comprendre ce qu’on remplace

`innerHTML` est pratique, mais peut devenir source d’erreurs.

### Problème fréquent

L’étudiant croit ajouter du contenu, mais remplace en réalité tout le contenu existant.

### Bon réflexe

Quand on veut seulement changer du texte, `textContent` est souvent plus simple et plus sûr.

---

## 5.5 Exécuter le script avant que le HTML soit prêt

### Symptôme

Les sélections retournent `null`.

### Cause fréquente

Le script est chargé trop tôt.

### Bon réflexe

Placer le script à la fin du `body`, ou attendre que le DOM soit chargé.

---

# 6. Erreurs fréquentes avec les événements

## 6.1 Appeler la fonction au lieu de la donner à l’événement

### Exemple fautif

```js
button.addEventListener("click", changeTitle());
```

### Problème

La fonction est exécutée tout de suite, au lieu d’être exécutée lors du clic.

### Correction

```js
button.addEventListener("click", changeTitle);
```

ou

```js
button.addEventListener("click", () => {
  changeTitle();
});
```

---

## 6.2 Oublier le paramètre `event` quand on en a besoin

### Exemple fautif

```js
form.addEventListener("submit", () => {
  event.preventDefault();
});
```

### Problème

`event` n’a pas été reçu dans la fonction.

### Correction

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

---

## 6.3 Écouter le mauvais élément

Par exemple, les étudiants mettent un `click` sur un parent alors qu’ils veulent écouter un bouton précis.

### Bon réflexe

Toujours se demander :

- quel élément déclenche l’action ?
- quel élément change réellement ?

---

## 6.4 Ne pas comprendre la propagation

Quand un bouton est dans un parent cliquable, les étudiants sont parfois surpris que le parent réagisse aussi.

### Idée à retenir

Un événement peut remonter vers les éléments parents.

---

# 7. Erreurs fréquentes avec les formulaires

## 7.1 Oublier `preventDefault()`

### Symptôme

La page recharge et le message affiché disparaît immédiatement.

### Correction

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

---

## 7.2 Lire l’élément au lieu de lire sa valeur

### Exemple fautif

```js
console.log(input);
```

### Problème

Cela affiche l’élément HTML, pas ce que l’utilisateur a écrit.

### Correction

```js
console.log(input.value);
```

---

## 7.3 Ne pas gérer les champs vides

C’est une erreur fréquente, non seulement technique, mais aussi logique.

### Bon réflexe

Toujours vérifier si une valeur est vide avant de la traiter.

```js
if (input.value === "") {
  message.textContent = "Champ obligatoire.";
}
```

---

## 7.4 Écouter `click` sur le bouton au lieu de `submit` sur le formulaire

Ce n’est pas toujours faux, mais cela contourne souvent la logique naturelle du formulaire.

### Idée à retenir

Pour un formulaire, écouter `submit` est souvent plus cohérent.

---

# 8. Erreurs fréquentes avec les interactions plus riches

## 8.1 Ne plus savoir quel élément porte l’état

Dans les interfaces un peu plus dynamiques, les étudiants se perdent parfois entre :

- le bouton
- la section
- le texte
- la classe CSS

### Bon réflexe

Toujours identifier :

- quel élément change ?
- quel événement déclenche ce changement ?
- quelle classe ou propriété représente l’état ?

---

## 8.2 Utiliser `toggle()` sans comprendre qu’il alterne à chaque clic

### Symptôme

L’étudiant croit que le code “change tout seul”.

### Idée à retenir

`toggle()` :

- ajoute la classe si elle n’existe pas
- la retire si elle existe déjà

---

## 8.3 Mélanger logique JavaScript et style CSS

Les étudiants écrivent parfois trop de style directement dans JavaScript.

### Bon réflexe

Quand c’est possible, laisser le CSS gérer l’apparence et utiliser JavaScript pour changer les classes.

---

## 8.4 Mal comprendre `event.target` en délégation

### Erreur fréquente

L’étudiant met l’écouteur sur le parent, mais oublie que l’élément réellement cliqué est dans `event.target`.

### Idée à retenir

Dans la délégation :

- l’écouteur est sur le parent
- l’élément cliqué peut être un enfant

---

# 9. Erreurs fréquentes avec les storages

## 9.1 Oublier que le storage enregistre du texte

### Exemple

```js
localStorage.setItem("age", 17);
```

Cela fonctionne, mais la valeur sera relue comme une chaîne.

### Idée à retenir

Le storage conserve les valeurs sous forme de texte.

---

## 9.2 Oublier `JSON.stringify()` pour un objet ou un tableau

### Exemple fautif

```js
const user = { name: "Lina" };
localStorage.setItem("user", user);
```

### Correction

```js
localStorage.setItem("user", JSON.stringify(user));
```

---

## 9.3 Oublier `JSON.parse()` à la lecture

### Exemple fautif

```js
const user = localStorage.getItem("user");
console.log(user.name);
```

### Problème

`user` est du texte.

### Correction

```js
const savedUser = localStorage.getItem("user");
const user = JSON.parse(savedUser);
console.log(user.name);
```

---

## 9.4 Oublier de vérifier si la donnée existe

### Exemple problématique

```js
const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach((task) => {
  console.log(task);
});
```

### Problème

Si la clé n’existe pas encore, cela peut poser problème.

### Correction

```js
const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
  const tasks = JSON.parse(savedTasks);
  tasks.forEach((task) => {
    console.log(task);
  });
}
```

---

## 9.5 Confondre storage et DOM

Le storage mémorise la donnée.
Le DOM affiche ou modifie la page.

Les deux travaillent souvent ensemble, mais ils n’ont pas le même rôle.

---

# 10. Erreurs de raisonnement très fréquentes

Au-delà de la syntaxe, beaucoup d’erreurs viennent d’un raisonnement flou.

## 10.1 Ne pas savoir ce qu’on veut transformer

Avant d’écrire du code, il faut être capable de répondre à cette question :

> Quel élément ou quelle donnée dois-je modifier ?

---

## 10.2 Vouloir tout faire en une seule fois

Les étudiants essaient parfois d’écrire toute la logique d’un coup, puis se perdent.

### Meilleure méthode

Travailler par étapes :

1. sélectionner
2. afficher dans la console
3. modifier une seule chose
4. tester
5. ajouter la suite

---

## 10.3 Ne pas tester assez souvent

Un étudiant écrit vingt lignes, puis teste à la fin.
Si ça ne marche pas, il devient beaucoup plus difficile de repérer l’erreur.

### Bon réflexe

Tester dès qu’une petite étape est prête.

---

## 10.4 Ignorer la console

La console est un outil de travail, pas seulement un endroit où apparaissent des erreurs.

### Utilité

- vérifier une valeur
- voir si un événement se déclenche
- inspecter un objet
- comprendre ce que contient une variable

---

# 11. Bonnes habitudes à développer

## 11.1 Donner des noms clairs aux variables

Mieux vaut :

```js
const taskInput = document.getElementById("taskInput");
```

que :

```js
const x = document.getElementById("taskInput");
```

Des noms clairs réduisent beaucoup les erreurs.

---

## 11.2 Avancer par petites étapes

Par exemple :

- je sélectionne le bouton
- je teste le clic
- j’ajoute la modification du texte
- je teste
- j’ajoute la sauvegarde dans le storage

---

## 11.3 Lire le code comme une suite d’actions

Un bon réflexe est de se dire :

- que sélectionne-t-on ?
- quel événement écoute-t-on ?
- quelle donnée lit-on ?
- qu’est-ce qu’on modifie ?
- qu’est-ce qu’on sauvegarde ?

---

## 11.4 Se relire avec trois questions simples

Avant de dire qu’un code “ne marche pas”, vérifier :

1. ai-je sélectionné le bon élément ?
2. ai-je lu la bonne valeur ?
3. ai-je bien déclenché l’action au bon moment ?

---

# 12. Méthode simple de débogage

Quand quelque chose ne fonctionne pas, voici une méthode utile :

## Étape 1 — Lire le message d’erreur

Souvent, il indique la ligne du problème.

## Étape 2 — Vérifier les noms

Les fautes de frappe sont très fréquentes.

## Étape 3 — Vérifier la sélection

L’élément existe-t-il vraiment ?

## Étape 4 — Vérifier les valeurs avec `console.log()`

Par exemple :

```js
console.log(input.value);
console.log(savedTasks);
console.log(button);
```

## Étape 5 — Réduire le problème

Tester seulement une petite partie du code.

---

# 13. Conclusion

En JavaScript, les erreurs les plus fréquentes ne viennent pas toujours d’une grande difficulté technique.
Elles viennent souvent de petites confusions répétées :

- une variable oubliée
- une mauvaise sélection dans le DOM
- une méthode mal choisie
- une valeur non lue correctement
- un événement mal placé
- une donnée JSON non convertie

Le plus important n’est donc pas seulement de mémoriser du code, mais de développer une bonne méthode :

- comprendre ce que l’on veut faire
- avancer par étapes
- tester souvent
- lire la console
- corriger calmement

C’est ainsi que l’on progresse réellement en programmation.

---

# 14. Résumé très court à retenir

Quand votre code ne fonctionne pas, vérifiez d’abord :

- la variable existe-t-elle ?
- l’élément DOM a-t-il bien été sélectionné ?
- l’événement est-il bien écouté ?
- la valeur lue est-elle la bonne ?
- le tableau ou l’objet du storage a-t-il été converti avec JSON ?
- la console indique-t-elle quelque chose d’utile ?

---
