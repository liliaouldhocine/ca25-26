# Exercices — Introduction au DOM en JavaScript

## Objectif

Ces exercices ont pour but de vous aider à mieux comprendre comment JavaScript peut :

- sélectionner des éléments HTML
- lire et modifier leur contenu
- changer des classes, des styles et des attributs
- réagir aux actions de l’utilisateur
- créer, ajouter et supprimer des éléments dans une page

## Consignes générales

Pour chaque exercice :

- lisez attentivement le code HTML fourni
- complétez le code JavaScript demandé
- testez votre code dans le navigateur
- observez ce qui change dans la page

---

# Exercice 1 — Comprendre la structure du DOM

## Objectif

Repérer les relations entre les éléments d’une page HTML.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 1</title>
  </head>
  <body>
    <section>
      <h1>Bienvenue</h1>
      <p>Voici un premier paragraphe.</p>
      <button>Commencer</button>
    </section>
  </body>
</html>
```

## Travail demandé

Répondez aux questions suivantes :

1. Quel est l’élément parent de `h1`, `p` et `button` ?
2. Quels sont les enfants de `body` ?
3. Quels sont les éléments frères de `p` ?
4. Expliquez en une phrase pourquoi on dit que le DOM ressemble à un arbre.

---

# Exercice 2 — Sélectionner des éléments

## Objectif

Utiliser `getElementById()`, `querySelector()` et `querySelectorAll()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 2</title>
  </head>
  <body>
    <h1 id="title">Ma page</h1>
    <p class="text">Paragraphe 1</p>
    <p class="text">Paragraphe 2</p>
    <button id="btn">Cliquer</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le `h1` avec `getElementById()`.
2. Sélectionnez le bouton avec `querySelector()`.
3. Sélectionnez tous les paragraphes avec `querySelectorAll()`.
4. Affichez dans la console :
   - le titre
   - le bouton
   - la liste des paragraphes

5. Affichez ensuite le texte de chaque paragraphe dans la console.

---

# Exercice 3 — Modifier le contenu d’un élément

## Objectif

Utiliser `textContent` pour lire et modifier du texte.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 3</title>
  </head>
  <body>
    <h1 id="title">Bonjour</h1>
    <p id="message">Bienvenue sur le site.</p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le titre.
2. Affichez dans la console son texte actuel.
3. Remplacez le texte de `h1` par : `Bonjour tout le monde`.
4. Sélectionnez le paragraphe.
5. Modifiez son texte pour afficher : `Le contenu a été mis à jour par JavaScript.`

---

# Exercice 4 — Réagir à un clic

## Objectif

Utiliser `addEventListener()` pour rendre la page interactive.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 4</title>
  </head>
  <body>
    <h1 id="title">Titre original</h1>
    <button id="changeBtn">Changer le titre</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le titre et le bouton.
2. Ajoutez un événement `click` sur le bouton.
3. Quand l’utilisateur clique, le texte du titre doit devenir :
   `Le titre a changé`.
4. Testez plusieurs fois pour vérifier que l’événement fonctionne bien.

## Défi supplémentaire

Modifiez ensuite le texte du bouton pour qu’il affiche :
`Titre modifié`.

---

# Exercice 5 — Ajouter et retirer une classe CSS

## Objectif

Utiliser `classList.add()`, `classList.remove()` et `classList.toggle()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 5</title>
    <style>
      .highlight {
        background-color: gold;
        color: black;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <p id="text">Ce texte peut être mis en évidence.</p>
    <button id="toggleBtn">Activer / désactiver le style</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Au clic sur le bouton, ajoutez ou retirez la classe `highlight` au paragraphe.
3. Testez plusieurs clics.
4. Expliquez en une phrase la différence entre modifier directement `style` et utiliser `classList`.

---

# Exercice 6 — Modifier un attribut

## Objectif

Utiliser `getAttribute()` et `setAttribute()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 6</title>
  </head>
  <body>
    <a id="link" href="https://example.com">Visiter le site</a>
    <button id="changeLinkBtn">Changer le lien</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le lien et le bouton.
2. Affichez dans la console la valeur actuelle de l’attribut `href`.
3. Au clic sur le bouton :
   - remplacez le lien par `https://openai.com`
   - remplacez le texte du lien par `Aller vers OpenAI`

4. Vérifiez le résultat dans la page.

---

# Exercice 7 — Créer et ajouter un élément

## Objectif

Utiliser `createElement()` et `appendChild()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 7</title>
  </head>
  <body>
    <ul id="list">
      <li>Pommes</li>
      <li>Bananes</li>
    </ul>

    <button id="addBtn">Ajouter un élément</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez la liste et le bouton.
2. Lorsque l’utilisateur clique sur le bouton :
   - créez un nouvel élément `li`
   - donnez-lui le texte `Oranges`
   - ajoutez-le à la liste

3. Testez plusieurs clics.
4. Observez ce qui se passe à chaque fois.

## Défi supplémentaire

Essayez d’ajouter un texte différent à chaque nouvel élément.

---

# Exercice 8 — Supprimer un élément

## Objectif

Utiliser `remove()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 8</title>
  </head>
  <body>
    <p id="note">Ce message peut être supprimé.</p>
    <button id="removeBtn">Supprimer le message</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Ajoutez un événement `click` sur le bouton.
3. Quand l’utilisateur clique, supprimez le paragraphe de la page.

## Question de réflexion

Que se passe-t-il si on clique une deuxième fois sur le bouton après la suppression ?

---

# Exercice 9 — Lire la valeur d’un champ

## Objectif

Lire ce que l’utilisateur écrit dans un `input`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 9</title>
  </head>
  <body>
    <input id="nameInput" type="text" placeholder="Entrez votre prénom" />
    <button id="showBtn">Afficher</button>
    <p id="result"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le champ `input`, le bouton et le paragraphe.
2. Lorsque l’utilisateur clique sur le bouton :
   - récupérez le texte écrit dans l’input
   - affichez dans le paragraphe :
     `Bonjour [prénom]`

3. Testez avec plusieurs valeurs.

## Défi supplémentaire

Si le champ est vide, affichez :
`Veuillez entrer un prénom.`

---

# Exercice 10 — Petit défi intégrateur

## Objectif

Réinvestir plusieurs notions du DOM dans un seul exercice.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 10</title>
    <style>
      .done {
        text-decoration: line-through;
        opacity: 0.6;
      }
    </style>
  </head>
  <body>
    <h1>Ma liste de tâches</h1>

    <input id="taskInput" type="text" placeholder="Nouvelle tâche" />
    <button id="addTaskBtn">Ajouter</button>

    <ul id="taskList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez l’input, le bouton et la liste.
2. Quand l’utilisateur clique sur `Ajouter` :
   - créez un nouvel élément `li`
   - donnez-lui le texte saisi dans le champ
   - ajoutez-le à la liste

3. Ajoutez un événement sur chaque nouvelle tâche pour que, lorsqu’on clique dessus, la classe `done` soit ajoutée ou retirée.
4. Videz le champ `input` après l’ajout.

## Contraintes

- n’ajoutez pas de notions non vues en classe
- utilisez seulement les méthodes DOM étudiées
- testez chaque étape avant de passer à la suivante

---

# Questions de synthèse

Après avoir terminé les exercices, répondez brièvement aux questions suivantes :

1. À quoi sert le DOM dans une page web ?
2. Pourquoi faut-il sélectionner un élément avant de le modifier ?
3. Quelle est la différence entre `querySelector()` et `querySelectorAll()` ?
4. À quoi sert `addEventListener()` ?
5. Pourquoi `classList` est souvent préférable à la modification directe de `style` ?
6. Quelle est la différence entre modifier un élément existant et en créer un nouveau ?

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

---
