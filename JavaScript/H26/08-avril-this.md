# JavaScript — Comprendre `this`

## Son rôle, son fonctionnement et ses implications

## Objectifs du cours

À la fin de ce cours, vous devriez être capables de :

- comprendre ce que représente `this` en JavaScript ;
- savoir de quoi dépend sa valeur ;
- distinguer le comportement de `this` dans une fonction classique et dans une fonction fléchée ;
- reconnaître les situations où `this` pose problème ;
- mieux lire et écrire du code JavaScript moderne.

---

# 1. Pourquoi apprendre `this` ?

Parmi les notions qui déstabilisent souvent en JavaScript, `this` arrive très souvent en tête.

La raison est simple : contrairement à d’autres langages, `this` en JavaScript ne désigne pas toujours la même chose. Sa valeur dépend du **contexte d’appel**.

Autrement dit, on ne peut pas comprendre `this` uniquement en regardant **où la fonction est écrite**. Il faut surtout regarder **comment elle est appelée**.

C’est ce qui rend cette notion importante, mais aussi parfois déroutante.

Comprendre `this` permet de :

- mieux manipuler les objets ;
- comprendre le comportement des méthodes ;
- éviter certaines erreurs fréquentes ;
- comprendre pourquoi les fonctions fléchées ne se comportent pas comme les fonctions classiques ;
- mieux lire du code utilisant des classes, des événements et des callbacks.

---

# 2. Idée générale : qu’est-ce que `this` ?

`this` est un mot-clé spécial qui représente **un certain objet lié au contexte courant**.

Le problème, c’est que cet objet peut changer selon la manière dont la fonction est utilisée.

On peut donc dire ceci :

> `this` ne dépend pas seulement de la fonction elle-même.
> Il dépend surtout de la façon dont cette fonction est appelée.

C’est l’idée la plus importante du cours.

---

# 3. Premier exemple intuitif

Regardons cet objet :

```js
const personne = {
  nom: "Lina",
  direBonjour() {
    console.log("Bonjour, je suis " + this.nom);
  },
};

personne.direBonjour();
```

Résultat :

```js
Bonjour, je suis Lina
```

Pourquoi ?

Parce que la méthode est appelée ainsi :

```js
personne.direBonjour();
```

Ici, `this` fait référence à `personne`.

Donc :

```js
this.nom;
```

signifie :

```js
personne.nom;
```

---

# 4. Règle de base à retenir

Dans une **méthode d’objet appelée avec la syntaxe point**, `this` fait généralement référence à l’objet placé avant le point.

Exemple :

```js
objet.methode();
```

Dans ce cas, à l’intérieur de `methode`, `this` renvoie vers `objet`.

C’est la situation la plus simple, et celle qu’il faut bien maîtriser en premier.

---

# 5. `this` dans un objet

## Exemple simple

```js
const voiture = {
  marque: "Toyota",
  afficherMarque() {
    console.log(this.marque);
  },
};

voiture.afficherMarque();
```

Résultat :

```js
Toyota;
```

Ici, `this` désigne l’objet `voiture`.

## Pourquoi c’est utile ?

Sans `this`, la méthode ne saurait pas sur quel objet elle travaille.

Grâce à `this`, la même logique peut être utilisée pour différents objets.

Exemple :

```js
const voiture1 = {
  marque: "Toyota",
  afficher() {
    console.log(this.marque);
  },
};

const voiture2 = {
  marque: "Honda",
  afficher() {
    console.log(this.marque);
  },
};

voiture1.afficher(); // Toyota
voiture2.afficher(); // Honda
```

La méthode dépend donc du contexte.

---

# 6. Erreur fréquente : croire que `this` pointe toujours vers l’objet où la fonction est écrite

Beaucoup d’étudiants pensent ceci :

> “`this` représente automatiquement l’objet à l’intérieur duquel la fonction a été définie.”

Ce n’est pas tout à fait exact.

Ce qui compte le plus, c’est **l’appel**.

Exemple :

```js
const personne = {
  nom: "Sara",
  parler() {
    console.log(this.nom);
  },
};

const fonctionSeule = personne.parler;
fonctionSeule();
```

Ici, la fonction a bien été écrite dans `personne`, mais elle est ensuite appelée seule.

Dans ce cas, `this` ne pointe plus naturellement vers `personne`.

C’est un point très important :

- **écriture dans un objet** ne garantit pas à elle seule la valeur de `this` ;
- c’est surtout **l’appel** qui fixe le contexte.

---

# 7. `this` dans une fonction classique appelée seule

Quand une fonction classique est appelée seule, sans objet devant elle, `this` ne se comporte pas comme dans une méthode.

Exemple :

```js
function saluer() {
  console.log(this);
}

saluer();
```

La valeur exacte dépend du contexte d’exécution, notamment du mode strict ou non.

Pour un cours d’introduction, la bonne idée à retenir est :

- dans une **méthode**, `this` renvoie souvent à l’objet ;
- dans une **fonction appelée seule**, `this` n’est souvent pas ce qu’on souhaite.

C’est pour cela qu’on évite souvent d’utiliser `this` dans une fonction classique isolée, sauf si on maîtrise bien le contexte.

---

# 8. `this` et les fonctions fléchées

## Point essentiel

Les fonctions fléchées se comportent différemment des fonctions classiques.

Une fonction fléchée **ne crée pas son propre `this`**.

Elle récupère le `this` du contexte extérieur.

C’est une règle absolument fondamentale.

---

# 9. Exemple d’erreur dans un objet

```js
const personne = {
  nom: "Lina",
  parler: () => {
    console.log(this.nom);
  },
};

personne.parler();
```

Beaucoup d’étudiants pensent que cela affichera `"Lina"`.

Mais ce n’est généralement pas le cas.

Pourquoi ?

Parce que la fonction fléchée ne prend pas `personne` comme `this`.
Elle conserve le `this` du contexte où elle a été créée.

Donc ici, `this` ne se comporte pas comme dans une vraie méthode d’objet.

---

# 10. Conclusion pédagogique importante

## Fonction classique

Une fonction classique peut avoir son propre `this`, selon la manière dont elle est appelée.

## Fonction fléchée

Une fonction fléchée ne définit pas son propre `this`. Elle hérite de celui du contexte englobant.

C’est la différence la plus importante entre les deux.

---

# 11. Alors, faut-il éviter les fonctions fléchées dans les objets ?

Pour des étudiants débutants, oui, comme règle générale :

- utilisez une **méthode classique** pour les méthodes d’objet ;
- utilisez une **fonction fléchée** pour les petites fonctions de traitement, par exemple dans `map()`, `filter()`, `forEach()`.

Exemple conseillé :

```js
const personne = {
  nom: "Lina",
  parler() {
    console.log(this.nom);
  },
};
```

Exemple à éviter au début :

```js
const personne = {
  nom: "Lina",
  parler: () => {
    console.log(this.nom);
  },
};
```

---

# 12. Pourquoi les fonctions fléchées sont quand même utiles avec `this`

Même si elles posent problème comme méthodes d’objet, elles deviennent très utiles dans certains cas, justement parce qu’elles **conservent le `this` extérieur**.

Exemple :

```js
const compteur = {
  valeur: 0,
  incrementerApresDelai() {
    setTimeout(() => {
      this.valeur++;
      console.log(this.valeur);
    }, 1000);
  },
};

compteur.incrementerApresDelai();
```

Ici, la fonction fléchée utilisée dans `setTimeout` récupère le `this` de `incrementerApresDelai`, donc celui de `compteur`.

C’est très pratique.

---

# 13. Comparaison avec une fonction classique dans ce cas

```js
const compteur = {
  valeur: 0,
  incrementerApresDelai() {
    setTimeout(function () {
      this.valeur++;
      console.log(this.valeur);
    }, 1000);
  },
};

compteur.incrementerApresDelai();
```

Ici, le `this` à l’intérieur du `function () {}` n’est plus naturellement celui de `compteur`.

Résultat : le code ne fait souvent pas ce qu’on veut.

C’est pour cela que les fonctions fléchées sont souvent utilisées dans les callbacks imbriqués.

---

# 14. Résumé intermédiaire très important

Utilisez cette idée simple :

- **méthode d’objet** : plutôt fonction classique ;
- **fonction courte à l’intérieur d’une méthode**, surtout dans un callback : fonction fléchée souvent très utile.

---

# 15. `this` dans les classes

Même si les étudiants ne travaillent pas encore beaucoup avec les classes, il est utile d’en parler.

Exemple :

```js
class Etudiant {
  constructor(nom) {
    this.nom = nom;
  }

  direNom() {
    console.log(this.nom);
  }
}

const e1 = new Etudiant("Maya");
e1.direNom();
```

Résultat :

```js
Maya;
```

Ici, `this` représente l’instance créée, c’est-à-dire l’objet `e1`.

## Pourquoi c’est logique ?

Dans une classe :

- `constructor` sert à construire l’objet ;
- `this.nom = nom` signifie qu’on ajoute la propriété `nom` à l’objet en cours de création.

Autrement dit, `this` désigne ici l’objet qu’on est en train de manipuler.

---

# 16. `this` et la perte de contexte

Une des difficultés majeures de `this`, c’est la **perte de contexte**.

Exemple :

```js
const utilisateur = {
  nom: "Adam",
  afficherNom() {
    console.log(this.nom);
  },
};

const afficher = utilisateur.afficherNom;
afficher();
```

Beaucoup s’attendent à voir :

```js
Adam;
```

Mais ce n’est pas garanti.

Pourquoi ?

Parce que la méthode a été détachée de l’objet.
Au moment de l’appel, il n’y a plus `utilisateur.` devant la fonction.

Donc le contexte est perdu.

---

# 17. Comment corriger ce problème : `bind`

JavaScript fournit une méthode très utile : `bind`.

Elle permet de créer une nouvelle fonction dans laquelle `this` est fixé.

Exemple :

```js
const utilisateur = {
  nom: "Adam",
  afficherNom() {
    console.log(this.nom);
  },
};

const afficher = utilisateur.afficherNom.bind(utilisateur);
afficher();
```

Résultat :

```js
Adam;
```

## Pourquoi `bind` est important ?

Parce qu’il permet de conserver le bon contexte quand :

- on passe une méthode comme callback ;
- on détache une méthode d’un objet ;
- on veut s’assurer que `this` garde une valeur précise.

---

# 18. `call` et `apply`

Il existe aussi `call` et `apply`, qui permettent d’appeler immédiatement une fonction avec un `this` précis.

Exemple avec `call` :

```js
function saluer() {
  console.log("Bonjour " + this.nom);
}

const personne = { nom: "Lina" };

saluer.call(personne);
```

Résultat :

```js
Bonjour Lina
```

Ici, on dit explicitement que `this` doit valoir `personne`.

Pour un cours débutant, il suffit surtout de retenir :

- `bind` crée une nouvelle fonction liée ;
- `call` appelle immédiatement avec un `this` donné ;
- `apply` ressemble à `call`, mais gère les arguments différemment.

---

# 19. `this` dans les gestionnaires d’événements

Dans le navigateur, `this` peut aussi apparaître dans les événements.

Exemple conceptuel :

```js
button.addEventListener("click", function () {
  console.log(this);
});
```

Ici, dans beaucoup de cas, `this` représente l’élément qui a reçu l’événement.

Mais avec une fonction fléchée :

```js
button.addEventListener("click", () => {
  console.log(this);
});
```

le comportement change, car la fonction fléchée ne crée pas son propre `this`.

C’est encore une illustration de la même règle :
les fonctions fléchées héritent du contexte extérieur.

---

# 20. Grande idée de synthèse

Pour comprendre `this`, il faut toujours poser cette question :

> Comment cette fonction est-elle appelée ?

Pas seulement :

- où a-t-elle été écrite,
- ni à quoi elle ressemble,
- mais surtout comment elle est exécutée.

---

# 21. Méthode pratique pour raisonner sur `this`

Quand vous voyez `this` dans du code, posez-vous les questions suivantes :

## 1. Est-ce une fonction classique ou une fonction fléchée ?

C’est essentiel, car leur comportement est différent.

## 2. La fonction est-elle appelée comme méthode d’objet ?

Par exemple :

```js
objet.methode();
```

Dans ce cas, `this` renvoie souvent vers `objet`.

## 3. La fonction a-t-elle été détachée ?

Si oui, le contexte peut être perdu.

## 4. Y a-t-il un `bind`, un `call` ou un `apply` ?

Cela peut fixer explicitement la valeur de `this`.

## 5. La fonction fléchée récupère-t-elle le `this` extérieur ?

C’est souvent ce qui explique le comportement.

---

# 22. Tableau récapitulatif

## Fonction classique dans une méthode d’objet

```js
const obj = {
  nom: "Lina",
  parler() {
    console.log(this.nom);
  },
};
```

Ici, `this` renvoie généralement vers `obj`.

## Fonction fléchée comme méthode d’objet

```js
const obj = {
  nom: "Lina",
  parler: () => {
    console.log(this.nom);
  },
};
```

Ici, `this` ne renvoie pas naturellement vers `obj`.

## Fonction fléchée dans un callback à l’intérieur d’une méthode

```js
const obj = {
  nom: "Lina",
  parlerPlusTard() {
    setTimeout(() => {
      console.log(this.nom);
    }, 1000);
  },
};
```

Ici, la fonction fléchée hérite du `this` de `parlerPlusTard`, ce qui est souvent utile.

---

# 23. Erreurs fréquentes chez les étudiants

## Erreur 1 : utiliser une fonction fléchée comme méthode d’objet

L’étudiant pense que `this` désignera l’objet, mais ce n’est pas le cas.

## Erreur 2 : détacher une méthode puis l’appeler seule

Le contexte est perdu.

## Erreur 3 : croire que `this` dépend uniquement de l’endroit où la fonction est écrite

En réalité, le mode d’appel est crucial.

## Erreur 4 : ne pas distinguer fonction classique et fonction fléchée

Or cette différence change complètement le comportement de `this`.

---

# 24. Conseils simples à donner aux étudiants

Pour commencer, retenez ces règles :

1. Dans un objet, écrivez les méthodes avec une syntaxe classique :

```js
parler() {
  ...
}
```

2. Utilisez les fonctions fléchées pour :

- `map`
- `filter`
- `forEach`
- les petits callbacks
- les callbacks internes où l’on veut conserver le `this` extérieur

3. Quand `this` se comporte bizarrement, vérifiez :

- comment la fonction est appelée ;
- si elle a été détachée ;
- si c’est une fonction fléchée ou non.

---

# 25. Exemple complet comparatif

## Cas 1 — méthode normale

```js
const chat = {
  nom: "Milo",
  parler() {
    console.log(this.nom);
  },
};

chat.parler();
```

Résultat :

```js
Milo;
```

## Cas 2 — méthode fléchée

```js
const chat = {
  nom: "Milo",
  parler: () => {
    console.log(this.nom);
  },
};

chat.parler();
```

Résultat : pas celui attendu.

## Cas 3 — callback interne avec flèche

```js
const chat = {
  nom: "Milo",
  parlerPlusTard() {
    setTimeout(() => {
      console.log(this.nom);
    }, 1000);
  },
};

chat.parlerPlusTard();
```

Ici, le résultat est cohérent avec l’intention.

---

# 26. Conclusion

`this` est une notion essentielle de JavaScript parce qu’elle relie une fonction à un contexte d’exécution.

L’idée fondamentale à retenir est la suivante :

> `this` dépend surtout de la manière dont une fonction est appelée.

Il faut aussi bien distinguer :

- les **fonctions classiques**, qui peuvent recevoir leur propre `this` ;
- les **fonctions fléchées**, qui héritent du `this` extérieur.

En pratique :

- utilisez des méthodes classiques dans les objets ;
- utilisez souvent les fonctions fléchées dans les callbacks ;
- quand `this` pose problème, regardez toujours le contexte d’appel.

---

# 27. Exercices de compréhension

## Exercice 1

Que va afficher ce code ? Pourquoi ?

```js
const personne = {
  nom: "Sara",
  parler() {
    console.log(this.nom);
  },
};

personne.parler();
```

## Exercice 2

Pourquoi ce code est-il problématique ?

```js
const personne = {
  nom: "Sara",
  parler: () => {
    console.log(this.nom);
  },
};
```

## Exercice 3

Expliquez pourquoi ce code peut perdre son contexte :

```js
const afficher = personne.parler;
afficher();
```

## Exercice 4

À quoi sert `bind` ?

## Exercice 5

Pourquoi une fonction fléchée peut-elle être utile dans `setTimeout` à l’intérieur d’une méthode ?

---

# 28. Petit résumé final

Retenez ceci :

- `this` ne veut pas toujours dire la même chose ;
- il dépend du contexte d’appel ;
- dans `objet.methode()`, `this` renvoie souvent vers `objet` ;
- une fonction fléchée ne crée pas son propre `this` ;
- elle hérite du `this` extérieur ;
- `bind` permet de fixer le contexte ;
- beaucoup d’erreurs viennent d’une perte de contexte ou d’une mauvaise utilisation des fonctions fléchées.

---
