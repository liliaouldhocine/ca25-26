# Exercices — Interactions plus riches avec le DOM en JavaScript

## Objectif

Ces exercices ont pour but de vous aider à mieux comprendre comment JavaScript peut :

- afficher et masquer des éléments
- changer l’état d’une interface
- utiliser `classList.toggle()` et `classList.contains()`
- gérer plusieurs événements sur une même page
- observer la propagation des événements
- découvrir la logique de la délégation d’événements

## Consignes générales

Pour chaque exercice :

- lisez attentivement le code HTML fourni
- complétez le fichier JavaScript demandé
- testez votre code dans le navigateur
- observez les changements dans la page
- essayez de bien comprendre **quel élément change**, **à quel moment**, et **pourquoi**

---

# Exercice 1 — Afficher et masquer un paragraphe

## Objectif

Afficher ou masquer un élément avec `style.display`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 1</title>
  </head>
  <body>
    <p id="info">Voici une information importante.</p>
    <button id="toggleBtn">Afficher / masquer</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Ajoutez un événement `click` sur le bouton.
3. Lorsque l’utilisateur clique :
   - si le paragraphe est visible, masquez-le
   - s’il est caché, affichez-le

---

# Exercice 2 — Afficher et masquer avec une classe CSS

## Objectif

Utiliser `classList.toggle()` au lieu de modifier directement le style.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 2</title>
    <style>
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <p id="message">Ce texte peut disparaître.</p>
    <button id="toggleBtn">Afficher / masquer</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Ajoutez un événement `click`.
3. À chaque clic, ajoutez ou retirez la classe `hidden` au paragraphe avec `classList.toggle()`.

## Question de réflexion

Pourquoi cette approche est-elle souvent plus propre que de modifier directement `style.display` ?

---

# Exercice 3 — Changer le texte du bouton selon l’état

## Objectif

Utiliser `classList.contains()` pour adapter l’interface.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 3</title>
    <style>
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <p id="details">Voici des détails supplémentaires.</p>
    <button id="toggleBtn">Masquer</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Au clic sur le bouton, ajoutez ou retirez la classe `hidden`.
3. Vérifiez ensuite si la classe `hidden` est présente avec `classList.contains()`.
4. Si le paragraphe est caché, le bouton doit afficher `Afficher`.
5. Si le paragraphe est visible, le bouton doit afficher `Masquer`.

---

# Exercice 4 — Changer l’état visuel d’une carte

## Objectif

Utiliser `classList.toggle()` pour représenter un état visuel.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 4</title>
    <style>
      .selected {
        border: 2px solid black;
        font-weight: bold;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div id="card">Carte 1</div>
    <button id="selectBtn">Sélectionner</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez la carte et le bouton.
2. Au clic sur le bouton, ajoutez ou retirez la classe `selected` à la carte.
3. Modifiez aussi le texte du bouton :
   - `Désélectionner` si la carte est sélectionnée
   - `Sélectionner` si elle ne l’est pas

---

# Exercice 5 — Gérer plusieurs boutons sur une même page

## Objectif

Créer plusieurs interactions sur la même interface.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 5</title>
  </head>
  <body>
    <button id="showBtn">Afficher</button>
    <button id="hideBtn">Masquer</button>
    <p id="message">Bonjour tout le monde</p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez les deux boutons et le paragraphe.
2. Quand on clique sur `Afficher`, le paragraphe doit apparaître.
3. Quand on clique sur `Masquer`, le paragraphe doit disparaître.

## Question de réflexion

Quelle différence y a-t-il entre ce fonctionnement et celui d’un seul bouton avec `toggle()` ?

---

# Exercice 6 — Plusieurs événements sur un même élément

## Objectif

Faire réagir un même élément à plusieurs événements.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 6</title>
  </head>
  <body>
    <button id="boxBtn">Interagissez avec moi</button>
    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le bouton et le paragraphe.
2. Ajoutez un événement `mouseover` :
   - le paragraphe doit afficher `La souris est sur le bouton.`

3. Ajoutez un événement `mouseout` :
   - le paragraphe doit afficher `La souris a quitté le bouton.`

4. Ajoutez un événement `click` :
   - le paragraphe doit afficher `Le bouton a été cliqué.`

---

# Exercice 7 — Mettre plusieurs éléments en évidence

## Objectif

Appliquer la même logique à plusieurs éléments avec `querySelectorAll()`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 7</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p class="item">Élément 1</p>
    <p class="item">Élément 2</p>
    <p class="item">Élément 3</p>

    <button id="highlightBtn">Mettre en évidence</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez tous les paragraphes avec la classe `item`.
2. Sélectionnez le bouton.
3. Au clic sur le bouton, ajoutez ou retirez la classe `highlight` à chaque paragraphe.

---

# Exercice 8 — Observer la propagation des événements

## Objectif

Voir qu’un clic peut être reçu par un enfant puis par son parent.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 8</title>
  </head>
  <body>
    <div id="parent" style="padding: 20px; border: 1px solid black;">
      <button id="childBtn">Clique ici</button>
    </div>

    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le `div`, le bouton et le paragraphe.
2. Ajoutez un événement `click` sur le bouton :
   - affichez `Le bouton a reçu le clic.`

3. Ajoutez aussi un événement `click` sur le parent :
   - affichez `Le parent a reçu le clic.` dans la console

4. Cliquez sur le bouton et observez ce qui se passe.

## Question de réflexion

Pourquoi les deux messages apparaissent-ils lors du clic sur le bouton ?

---

# Exercice 9 — Empêcher la propagation

## Objectif

Utiliser `stopPropagation()`.

## Code de départ

Reprenez le code de l’exercice 8.

## Travail demandé

Dans `script.js` :

1. Gardez les deux événements `click`.
2. Modifiez l’événement du bouton pour recevoir le paramètre `event`.
3. Ajoutez `event.stopPropagation()`.
4. Testez à nouveau.

## Question de réflexion

Quelle différence observez-vous par rapport à l’exercice précédent ?

---

# Exercice 10 — Découvrir la délégation d’événements

## Objectif

Placer un seul écouteur sur un parent pour gérer les clics sur ses enfants.

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
    <ul id="taskList">
      <li>Tâche 1</li>
      <li>Tâche 2</li>
      <li>Tâche 3</li>
    </ul>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez la liste `ul`.
2. Ajoutez un événement `click` sur cette liste.
3. Vérifiez si l’élément cliqué est bien un `li`.
4. Si oui, ajoutez ou retirez la classe `done` à l’élément cliqué.

## Indice

L’élément réellement cliqué se trouve dans `event.target`.

---

# Exercice 11 — Petit défi intégrateur : ouvrir et fermer une section d’aide

## Objectif

Réinvestir plusieurs notions dans un même exercice.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 11</title>
    <style>
      .hidden {
        display: none;
      }

      .selected {
        background-color: lightgray;
        padding: 10px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <button id="toggleHelpBtn">Afficher l’aide</button>

    <div id="helpSection" class="hidden">
      <p id="helpText">Voici une aide importante pour l’utilisateur.</p>
      <button id="selectTextBtn">Sélectionner le texte</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le bouton principal, la section d’aide, le texte et le deuxième bouton.
2. Au clic sur `toggleHelpBtn` :
   - affichez ou masquez la section avec `classList.toggle("hidden")`
   - changez le texte du bouton selon l’état :
     - `Afficher l’aide`
     - `Masquer l’aide`

3. Au clic sur `selectTextBtn` :
   - ajoutez ou retirez la classe `selected` au paragraphe
   - changez le texte du bouton :
     - `Sélectionner le texte`
     - `Désélectionner le texte`

---

# Questions de synthèse

Après avoir terminé les exercices, répondez brièvement aux questions suivantes :

1. À quoi sert `classList.toggle()` ?
2. À quoi sert `classList.contains()` ?
3. Quelle différence y a-t-il entre masquer un élément avec `style.display` et avec une classe CSS ?
4. Pourquoi un même élément peut-il avoir plusieurs événements ?
5. Qu’est-ce que la propagation des événements ?
6. À quoi sert `stopPropagation()` ?
7. Quelle est l’idée générale de la délégation d’événements ?
8. Pourquoi la délégation peut-elle être utile quand on a plusieurs éléments semblables ?

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

---
