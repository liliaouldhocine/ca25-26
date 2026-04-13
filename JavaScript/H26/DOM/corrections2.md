# Corrigé — Les événements et les formulaires en JavaScript

## Exercice 1 — Réagir à un clic simple

### Corrigé `script.js`

```js
const message = document.getElementById("message");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  message.textContent = "Le bouton a été cliqué.";
});
```

### Explication

- on sélectionne le paragraphe
- on sélectionne le bouton
- on écoute l’événement `click`
- lorsqu’un clic se produit, on modifie le texte du paragraphe

---

## Exercice 2 — Modifier plusieurs éléments lors d’un clic

### Corrigé `script.js`

```js
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  title.textContent = "Le titre a été modifié";
  changeBtn.textContent = "C'est fait";
});
```

### Explication

Un seul événement peut déclencher plusieurs actions.
Ici, le clic change à la fois :

- le texte du titre
- le texte du bouton

---

## Exercice 3 — Réagir à la saisie avec `input`

### Corrigé `script.js`

```js
const nameInput = document.getElementById("nameInput");
const preview = document.getElementById("preview");

nameInput.addEventListener("input", () => {
  preview.textContent = "Vous écrivez : " + nameInput.value;
});
```

### Explication

- `input` se déclenche pendant que l’utilisateur écrit
- `nameInput.value` permet de récupérer ce qui est saisi
- le paragraphe est mis à jour en direct

---

## Exercice 4 — Réagir à un changement avec `change`

### Corrigé `script.js`

```js
const citySelect = document.getElementById("citySelect");
const result = document.getElementById("result");

citySelect.addEventListener("change", () => {
  result.textContent = "Ville choisie : " + citySelect.value;
});
```

### Explication

- on écoute le changement de valeur de la liste déroulante
- lorsque l’utilisateur choisit une ville, le paragraphe affiche cette valeur

---

## Exercice 5 — Premier formulaire avec `submit`

### Corrigé `script.js`

```js
const nameForm = document.getElementById("nameForm");
const firstName = document.getElementById("firstName");
const message = document.getElementById("message");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Bonjour " + firstName.value;
});
```

### Explication

- on écoute l’événement `submit` sur le formulaire
- `event.preventDefault()` empêche le comportement automatique du formulaire
- on récupère la valeur du champ avec `.value`
- on affiche un message personnalisé

---

## Exercice 6 — Vérifier qu’un champ n’est pas vide

### Corrigé `script.js`

```js
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const feedback = document.getElementById("feedback");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "") {
    feedback.textContent = "Veuillez entrer un nom d'utilisateur.";
  } else {
    feedback.textContent = "Bienvenue " + username.value;
  }
});
```

### Explication

Ici, on ajoute une validation simple :

- si le champ est vide, on affiche un message d’erreur
- sinon, on affiche un message d’accueil

---

## Exercice 7 — Vérifier plusieurs champs

### Corrigé `script.js`

```js
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const result = document.getElementById("result");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    result.textContent = "Tous les champs doivent être remplis.";
  } else {
    result.textContent = "Formulaire valide.";
  }
});
```

### Explication

- on vérifie les deux champs
- `||` signifie “ou”
- si l’un des deux champs est vide, le formulaire n’est pas considéré comme valide

---

## Exercice 8 — Vider un champ après soumission

### Corrigé `script.js`

```js
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const message = document.getElementById("message");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (taskInput.value !== "") {
    message.textContent = "Tâche ajoutée : " + taskInput.value;
    taskInput.value = "";
  }
});
```

### Explication

- si le champ contient du texte, on affiche un message
- ensuite, on remet le champ à vide avec :

```js
taskInput.value = "";
```

Cela permet à l’utilisateur de saisir une nouvelle tâche plus facilement.

---

## Exercice 9 — Afficher un message selon le choix de l’utilisateur

### Corrigé `script.js`

```js
const languageSelect = document.getElementById("languageSelect");
const message = document.getElementById("message");

languageSelect.addEventListener("change", () => {
  if (languageSelect.value === "") {
    message.textContent = "Aucun langage sélectionné.";
  } else {
    message.textContent = "Vous avez choisi : " + languageSelect.value;
  }
});
```

### Explication

- si la valeur est vide, cela signifie qu’aucun vrai choix n’a été fait
- sinon, on affiche le langage choisi

---

## Exercice 10 — Petit défi intégrateur : mini formulaire de message

### Corrigé `script.js`

```js
const messageForm = document.getElementById("messageForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const output = document.getElementById("output");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "" || messageInput.value === "") {
    output.textContent = "Veuillez remplir tous les champs.";
  } else {
    output.textContent =
      "Message de " + nameInput.value + " : " + messageInput.value;

    nameInput.value = "";
    messageInput.value = "";
  }
});
```

### Explication

Cet exercice combine plusieurs notions importantes :

- sélection d’éléments
- événement `submit`
- `preventDefault()`
- lecture des valeurs avec `.value`
- validation simple
- affichage d’un message
- remise à zéro des champs

---

# Corrigé des questions de synthèse

## 1. Qu’est-ce qu’un événement dans une page web ?

Un événement est une action qui se produit sur la page, comme un clic, une saisie dans un champ ou l’envoi d’un formulaire.

## 2. À quoi sert `addEventListener()` ?

`addEventListener()` sert à écouter un événement sur un élément et à exécuter du code lorsque cet événement se produit.

## 3. Quelle est la différence entre `click` et `submit` ?

`click` est lié au clic sur un élément, souvent un bouton, tandis que `submit` correspond à l’envoi d’un formulaire.

## 4. Pourquoi utilise-t-on souvent `preventDefault()` avec un formulaire ?

On utilise souvent `preventDefault()` pour empêcher le comportement automatique du formulaire, comme le rechargement de la page.

## 5. À quoi sert `.value` dans un champ de formulaire ?

`.value` sert à lire le contenu saisi par l’utilisateur dans un champ.

## 6. Pourquoi est-il utile de vérifier si un champ est vide avant de traiter un formulaire ?

Cela permet d’éviter de traiter des données incomplètes et d’afficher un message utile à l’utilisateur.

## 7. Quelle est la différence entre `input` et `change` ?

`input` réagit immédiatement pendant la saisie, alors que `change` réagit lorsque la valeur est changée puis validée.

---

# Remarques pédagogiques utiles

Dans presque tous ces exercices, on retrouve la même structure :

## 1. Sélectionner les éléments

```js
const form = document.getElementById("form");
const input = document.getElementById("input");
const message = document.getElementById("message");
```

## 2. Écouter un événement

```js
form.addEventListener("submit", (event) => {
```

## 3. Empêcher le comportement par défaut si nécessaire

```js
event.preventDefault();
```

## 4. Lire une valeur

```js
input.value;
```

## 5. Vérifier une condition

```js
if (input.value === "") {
```

## 6. Mettre la page à jour

```js
message.textContent = "...";
```

C’est cette logique qui doit devenir naturelle.

---
