# Corrigé — Exercices sur le DOM en JavaScript

## Exercice 1 — Comprendre la structure du DOM

### Questions

1. **Quel est l’élément parent de `h1`, `p` et `button` ?**
   L’élément parent est `section`.

2. **Quels sont les enfants de `body` ?**
   L’élément enfant direct de `body` est `section`.

3. **Quels sont les éléments frères de `p` ?**
   Les éléments frères de `p` sont `h1` et `button`.

4. **Expliquez en une phrase pourquoi on dit que le DOM ressemble à un arbre.**
   On dit que le DOM ressemble à un arbre parce que les éléments HTML sont organisés en relations de parent, d’enfant et de frères/sœurs.

---

## Exercice 2 — Sélectionner des éléments

### Corrigé `script.js`

```js id="abxk0n"
const title = document.getElementById("title");
const button = document.querySelector("#btn");
const paragraphs = document.querySelectorAll(".text");

console.log(title);
console.log(button);
console.log(paragraphs);

paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});
```

### Explication

- `getElementById("title")` sélectionne le `h1`
- `querySelector("#btn")` sélectionne le bouton
- `querySelectorAll(".text")` sélectionne tous les paragraphes ayant la classe `text`
- `forEach()` permet de parcourir tous les paragraphes

---

## Exercice 3 — Modifier le contenu d’un élément

### Corrigé `script.js`

```js id="qo8n0r"
const title = document.getElementById("title");
console.log(title.textContent);

title.textContent = "Bonjour tout le monde";

const message = document.getElementById("message");
message.textContent = "Le contenu a été mis à jour par JavaScript.";
```

### Explication

- `textContent` permet de lire le texte actuel
- on peut ensuite réécrire ce texte avec une nouvelle valeur

---

## Exercice 4 — Réagir à un clic

### Corrigé `script.js`

```js id="v9xrwj"
const title = document.getElementById("title");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  title.textContent = "Le titre a changé";
  button.textContent = "Titre modifié";
});
```

### Explication

- on sélectionne le titre et le bouton
- on écoute l’événement `click`
- lorsque le clic arrive, on modifie le texte du titre
- on change aussi le texte du bouton

---

## Exercice 5 — Ajouter et retirer une classe CSS

### Corrigé `script.js`

```js id="skqxic"
const text = document.getElementById("text");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  text.classList.toggle("highlight");
});
```

### Réponse à la question

**Quelle est la différence entre modifier directement `style` et utiliser `classList` ?**
Modifier `style` change directement l’apparence dans JavaScript, tandis que `classList` permet d’ajouter ou retirer une classe CSS déjà définie dans la feuille de style.

### Remarque

Ici, `toggle()` est très pratique, car :

- si la classe est absente, elle est ajoutée
- si la classe est déjà présente, elle est retirée

---

## Exercice 6 — Modifier un attribut

### Corrigé `script.js`

```js id="q9s05n"
const link = document.getElementById("link");
const button = document.getElementById("changeLinkBtn");

console.log(link.getAttribute("href"));

button.addEventListener("click", () => {
  link.setAttribute("href", "https://openai.com");
  link.textContent = "Aller vers OpenAI";
});
```

### Explication

- `getAttribute("href")` lit la valeur actuelle du lien
- `setAttribute("href", "...")` remplace cette valeur
- `textContent` change le texte affiché dans le lien

---

## Exercice 7 — Créer et ajouter un élément

### Corrigé `script.js`

```js id="ysr7wi"
const list = document.getElementById("list");
const button = document.getElementById("addBtn");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Oranges";
  list.appendChild(newItem);
});
```

### Explication

- `createElement("li")` crée un nouvel élément de liste
- `textContent` lui donne un texte
- `appendChild()` l’ajoute à la liste existante

### Réponse à l’observation demandée

À chaque clic, un nouvel élément `li` contenant `Oranges` est ajouté à la fin de la liste.

### Version possible pour le défi

```js id="4mvmp2"
const list = document.getElementById("list");
const button = document.getElementById("addBtn");
let count = 1;

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Fruit " + count;
  list.appendChild(newItem);
  count++;
});
```

---

## Exercice 8 — Supprimer un élément

### Corrigé `script.js`

```js id="8s61r4"
const note = document.getElementById("note");
const button = document.getElementById("removeBtn");

button.addEventListener("click", () => {
  note.remove();
});
```

### Réponse à la question de réflexion

**Que se passe-t-il si on clique une deuxième fois sur le bouton après la suppression ?**
L’élément a déjà été retiré de la page. Le clic sur le bouton ne le fera pas réapparaître.

### Remarque pédagogique

Dans ce code précis, la variable `note` existe toujours en JavaScript, mais l’élément n’est plus affiché dans la page.

---

## Exercice 9 — Lire la valeur d’un champ

### Corrigé `script.js`

```js id="aljz06"
const input = document.getElementById("nameInput");
const button = document.getElementById("showBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  if (input.value === "") {
    result.textContent = "Veuillez entrer un prénom.";
  } else {
    result.textContent = "Bonjour " + input.value;
  }
});
```

### Explication

- `input.value` permet de récupérer ce que l’utilisateur a écrit
- on vérifie si le champ est vide
- sinon, on affiche un message personnalisé

---

## Exercice 10 — Petit défi intégrateur

### Corrigé `script.js`

```js id="37zv83"
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;

  newTask.addEventListener("click", () => {
    newTask.classList.toggle("done");
  });

  taskList.appendChild(newTask);
  taskInput.value = "";
});
```

### Explication

Ce corrigé fait bien les actions demandées :

- sélection de l’input, du bouton et de la liste
- création d’un nouvel élément `li`
- ajout du texte saisi par l’utilisateur
- ajout de l’élément à la liste
- ajout d’un événement sur chaque nouvelle tâche
- ajout ou retrait de la classe `done` lorsqu’on clique sur une tâche
- vidage du champ après l’ajout

### Version un peu plus prudente

Si on veut éviter d’ajouter une tâche vide, on peut écrire :

```js id="koq0n1"
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    newTask.addEventListener("click", () => {
      newTask.classList.toggle("done");
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});
```

---

# Corrigé des questions de synthèse

## 1. À quoi sert le DOM dans une page web ?

Le DOM sert à représenter la page HTML sous forme d’objets que JavaScript peut lire et modifier.

## 2. Pourquoi faut-il sélectionner un élément avant de le modifier ?

Il faut d’abord sélectionner un élément pour que JavaScript sache exactement quel élément de la page il doit manipuler.

## 3. Quelle est la différence entre `querySelector()` et `querySelectorAll()` ?

`querySelector()` retourne le premier élément correspondant au sélecteur, alors que `querySelectorAll()` retourne tous les éléments correspondants.

## 4. À quoi sert `addEventListener()` ?

`addEventListener()` sert à écouter une action, comme un clic, puis à exécuter du code lorsque cette action se produit.

## 5. Pourquoi `classList` est souvent préférable à la modification directe de `style` ?

`classList` est souvent préférable parce qu’il permet de laisser le style dans le CSS, ce qui garde le code plus clair et mieux organisé.

## 6. Quelle est la différence entre modifier un élément existant et en créer un nouveau ?

Modifier un élément existant change quelque chose qui est déjà dans la page, tandis que créer un nouvel élément ajoute un nouveau contenu dans le DOM.

---
