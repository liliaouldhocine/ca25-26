# Exercices — Les événements et les formulaires en JavaScript

## Objectif

Ces exercices ont pour but de vous aider à mieux comprendre comment JavaScript peut :

- réagir aux actions de l’utilisateur
- écouter des événements sur une page
- lire les valeurs saisies dans un formulaire
- empêcher le comportement par défaut d’un formulaire
- valider des champs simples
- afficher des messages dynamiques dans la page

## Consignes générales

Pour chaque exercice :

- lisez bien le code HTML fourni
- complétez le fichier JavaScript
- testez votre code dans le navigateur
- observez ce qui se passe à chaque interaction
- essayez de comprendre la logique avant de passer au suivant

---

# Exercice 1 — Réagir à un clic simple

## Objectif

Utiliser `addEventListener()` avec l’événement `click`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 1</title>
  </head>
  <body>
    <p id="message">Aucune action pour le moment.</p>
    <button id="btn">Cliquer ici</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le paragraphe et le bouton.
2. Ajoutez un événement `click` sur le bouton.
3. Lorsque l’utilisateur clique, remplacez le texte du paragraphe par :
   `Le bouton a été cliqué.`

---

# Exercice 2 — Modifier plusieurs éléments lors d’un clic

## Objectif

Déclencher plusieurs changements avec un seul événement.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 2</title>
  </head>
  <body>
    <h1 id="title">Bienvenue</h1>
    <button id="changeBtn">Changer</button>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le titre et le bouton.
2. Lorsque l’utilisateur clique sur le bouton :
   - changez le texte du titre pour `Le titre a été modifié`
   - changez le texte du bouton pour `C'est fait`

---

# Exercice 3 — Réagir à la saisie avec `input`

## Objectif

Comprendre l’événement `input`.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 3</title>
  </head>
  <body>
    <input id="nameInput" type="text" placeholder="Entrez votre prénom" />
    <p id="preview"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le champ texte et le paragraphe.
2. Ajoutez un événement `input` sur le champ.
3. Pendant que l’utilisateur écrit, affichez dans le paragraphe :
   `Vous écrivez : ...`

Exemple attendu :

- si l’utilisateur tape `Lina`
- le paragraphe doit afficher `Vous écrivez : Lina`

---

# Exercice 4 — Réagir à un changement avec `change`

## Objectif

Utiliser l’événement `change` sur une liste déroulante.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 4</title>
  </head>
  <body>
    <select id="citySelect">
      <option value="">Choisissez une ville</option>
      <option value="Montréal">Montréal</option>
      <option value="Paris">Paris</option>
      <option value="Tokyo">Tokyo</option>
    </select>

    <p id="result"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez la liste déroulante et le paragraphe.
2. Ajoutez un événement `change`.
3. Lorsque la valeur change, affichez :
   `Ville choisie : ...`

---

# Exercice 5 — Premier formulaire avec `submit`

## Objectif

Écouter la soumission d’un formulaire.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 5</title>
  </head>
  <body>
    <form id="nameForm">
      <input id="firstName" type="text" placeholder="Votre prénom" />
      <button type="submit">Envoyer</button>
    </form>

    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le formulaire, le champ texte et le paragraphe.
2. Ajoutez un événement `submit` sur le formulaire.
3. Empêchez le comportement par défaut avec `preventDefault()`.
4. Affichez dans le paragraphe :
   `Bonjour ...`

Exemple :

- si l’utilisateur écrit `Sara`
- le message affiché doit être `Bonjour Sara`

---

# Exercice 6 — Vérifier qu’un champ n’est pas vide

## Objectif

Faire une validation simple.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 6</title>
  </head>
  <body>
    <form id="loginForm">
      <input id="username" type="text" placeholder="Nom d'utilisateur" />
      <button type="submit">Connexion</button>
    </form>

    <p id="feedback"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le formulaire, le champ et le paragraphe.
2. Ajoutez un événement `submit`.
3. Empêchez le comportement par défaut.
4. Si le champ est vide, affichez :
   `Veuillez entrer un nom d'utilisateur.`
5. Sinon, affichez :
   `Bienvenue ...`

---

# Exercice 7 — Vérifier plusieurs champs

## Objectif

Valider un formulaire contenant plus d’un champ.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 7</title>
  </head>
  <body>
    <form id="contactForm">
      <input id="nameInput" type="text" placeholder="Nom" />
      <input id="emailInput" type="email" placeholder="Email" />
      <button type="submit">Valider</button>
    </form>

    <p id="result"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le formulaire, les deux champs et le paragraphe.
2. Ajoutez un événement `submit`.
3. Empêchez le comportement par défaut.
4. Si un des deux champs est vide, affichez :
   `Tous les champs doivent être remplis.`
5. Sinon, affichez :
   `Formulaire valide.`

---

# Exercice 8 — Vider un champ après soumission

## Objectif

Réinitialiser un champ après traitement.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 8</title>
  </head>
  <body>
    <form id="taskForm">
      <input id="taskInput" type="text" placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
    </form>

    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le formulaire, le champ et le paragraphe.
2. Ajoutez un événement `submit`.
3. Empêchez le comportement par défaut.
4. Si le champ contient du texte :
   - affichez `Tâche ajoutée : ...`
   - videz ensuite le champ

5. Vérifiez que le champ redevient vide après l’envoi

---

# Exercice 9 — Afficher un message selon le choix de l’utilisateur

## Objectif

Combiner `change` et condition simple.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 9</title>
  </head>
  <body>
    <select id="languageSelect">
      <option value="">Choisissez un langage</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
      <option value="PHP">PHP</option>
    </select>

    <p id="message"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez la liste déroulante et le paragraphe.
2. Ajoutez un événement `change`.
3. Si l’utilisateur choisit une valeur vide, affichez :
   `Aucun langage sélectionné.`
4. Sinon, affichez :
   `Vous avez choisi : ...`

---

# Exercice 10 — Petit défi intégrateur : mini formulaire de message

## Objectif

Réinvestir plusieurs notions dans un même exercice.

## Code de départ

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exercice 10</title>
  </head>
  <body>
    <form id="messageForm">
      <input id="nameInput" type="text" placeholder="Votre prénom" />
      <input id="messageInput" type="text" placeholder="Votre message" />
      <button type="submit">Envoyer</button>
    </form>

    <p id="output"></p>

    <script src="script.js"></script>
  </body>
</html>
```

## Travail demandé

Dans `script.js` :

1. Sélectionnez le formulaire, les deux champs et le paragraphe.
2. Ajoutez un événement `submit`.
3. Empêchez le comportement par défaut.
4. Si un des champs est vide, affichez :
   `Veuillez remplir tous les champs.`
5. Sinon, affichez :
   `Message de [prénom] : [message]`
6. Videz les deux champs après l’envoi

---

# Questions de synthèse

Après avoir terminé les exercices, répondez aux questions suivantes :

1. Qu’est-ce qu’un événement dans une page web ?
2. À quoi sert `addEventListener()` ?
3. Quelle est la différence entre `click` et `submit` ?
4. Pourquoi utilise-t-on souvent `preventDefault()` avec un formulaire ?
5. À quoi sert `.value` dans un champ de formulaire ?
6. Pourquoi est-il utile de vérifier si un champ est vide avant de traiter un formulaire ?
7. Quelle est la différence entre `input` et `change` ?

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
