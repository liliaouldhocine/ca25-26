# Corrigé — Les storages en JavaScript

## Exercice 1 — Enregistrer une valeur simple dans `localStorage`

### Corrigé `script.js`

```js
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("city", "Montréal");
  const city = localStorage.getItem("city");
  message.textContent = "Ville enregistrée : " + city;
});
```

### Explication

- `setItem()` enregistre une valeur dans `localStorage`
- `getItem()` relit cette valeur
- le paragraphe affiche ensuite la donnée enregistrée

---

## Exercice 2 — Lire une donnée déjà enregistrée au chargement

### Corrigé `script.js`

```js
const message = document.getElementById("message");
const city = localStorage.getItem("city");

if (city !== null) {
  message.textContent = "Ville trouvée : " + city;
} else {
  message.textContent = "Aucune ville enregistrée.";
}
```

### Explication

- on lit la clé `"city"`
- si elle existe, on affiche sa valeur
- sinon, on affiche un message indiquant qu’aucune donnée n’a été trouvée

---

## Exercice 3 — Enregistrer le contenu d’un champ texte

### Corrigé `script.js`

```js
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("firstName", nameInput.value);
  message.textContent = "Prénom enregistré : " + nameInput.value;
});
```

### Explication

- on lit la valeur du champ avec `.value`
- on l’enregistre dans `localStorage`
- on confirme l’action dans la page

---

## Exercice 4 — Réafficher un prénom enregistré au chargement

### Corrigé `script.js`

```js
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

const savedName = localStorage.getItem("firstName");

if (savedName !== null) {
  message.textContent = "Bonjour " + savedName;
  nameInput.value = savedName;
}

saveBtn.addEventListener("click", () => {
  localStorage.setItem("firstName", nameInput.value);
  message.textContent = "Bonjour " + nameInput.value;
});
```

### Explication

- au chargement, on essaie de relire `"firstName"`
- si la donnée existe, on l’affiche et on remet sa valeur dans le champ
- le bouton permet toujours de mettre à jour l’information

---

## Exercice 5 — Supprimer une donnée avec `removeItem()`

### Corrigé `script.js`

```js
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const message = document.getElementById("message");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("firstName", nameInput.value);
  message.textContent = "Prénom enregistré : " + nameInput.value;
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("firstName");
  nameInput.value = "";
  message.textContent = "Prénom supprimé.";
});
```

### Explication

- `removeItem("firstName")` supprime seulement cette donnée
- le champ est vidé
- un message confirme la suppression

---

## Exercice 6 — Comparer `localStorage` et `sessionStorage`

### Corrigé `script.js`

```js
const localBtn = document.getElementById("localBtn");
const sessionBtn = document.getElementById("sessionBtn");
const message = document.getElementById("message");

localBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  message.textContent = "Thème enregistré dans localStorage.";
});

sessionBtn.addEventListener("click", () => {
  sessionStorage.setItem("theme", "dark");
  message.textContent = "Thème enregistré dans sessionStorage.";
});
```

### Explication

- `localStorage` garde la donnée plus longtemps
- `sessionStorage` la garde seulement pendant la session de l’onglet

### Observation attendue

- après rechargement, les deux peuvent encore exister
- après fermeture de l’onglet, `sessionStorage` disparaît
- `localStorage` reste disponible

---

## Exercice 7 — Stocker un tableau avec `JSON.stringify()`

### Corrigé `script.js`

```js
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

const fruits = ["pomme", "banane", "orange"];

saveBtn.addEventListener("click", () => {
  localStorage.setItem("fruits", JSON.stringify(fruits));
  message.textContent = "Tableau enregistré.";
});
```

### Explication

- un tableau ne doit pas être stocké directement
- `JSON.stringify()` le transforme en texte JSON
- c’est cette chaîne qui est enregistrée dans le storage

---

## Exercice 8 — Relire un tableau avec `JSON.parse()`

### Corrigé `script.js`

```js
const fruitList = document.getElementById("fruitList");
const savedFruits = localStorage.getItem("fruits");

if (savedFruits !== null) {
  const fruits = JSON.parse(savedFruits);

  fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}
```

### Explication

- `getItem("fruits")` retourne du texte
- `JSON.parse()` reconstruit le tableau JavaScript
- on parcourt ensuite le tableau pour créer les `li`

### Réponse à la question

`JSON.parse()` est nécessaire parce que la donnée relue depuis le storage est une chaîne de caractères, pas un vrai tableau JavaScript.

---

## Exercice 9 — Stocker un objet

### Corrigé `script.js`

```js
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

const user = {
  name: "Lina",
  age: 17,
};

saveBtn.addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify(user));
  message.textContent = "Utilisateur enregistré.";
});
```

### Explication

- l’objet est converti en texte avec `JSON.stringify()`
- ce texte est stocké sous la clé `"user"`

---

## Exercice 10 — Relire un objet et afficher une information

### Corrigé `script.js`

```js
const message = document.getElementById("message");
const savedUser = localStorage.getItem("user");

if (savedUser !== null) {
  const user = JSON.parse(savedUser);
  message.textContent = "Nom : " + user.name + " | Âge : " + user.age;
} else {
  message.textContent = "Aucun utilisateur enregistré.";
}
```

### Explication

- on relit la donnée `"user"`
- `JSON.parse()` transforme le texte en objet JavaScript
- on peut ensuite accéder à `user.name` et `user.age`

---

## Exercice 11 — Petit défi intégrateur : mini liste de tâches persistante

### Corrigé `script.js`

```js
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
  tasks = JSON.parse(savedTasks);

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    tasks.push(taskInput.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = "";
  }
});
```

### Explication

Cet exercice relie plusieurs notions :

- lecture d’un tableau dans `localStorage`
- conversion avec `JSON.parse()`
- affichage dans le DOM
- ajout d’une nouvelle tâche
- mise à jour du tableau
- sauvegarde avec `JSON.stringify()`

### Observation attendue

Après rechargement de la page, les tâches enregistrées réapparaissent.

---

## Exercice 12 — Vider complètement le storage

### Corrigé `script.js`

```js
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  message.textContent = "Le localStorage a été vidé.";
});
```

### Explication

- `clear()` supprime toutes les données du `localStorage` pour le site courant
- cette méthode est plus large que `removeItem()`

---

# Corrigé des questions de synthèse

## 1. À quoi sert un storage dans le navigateur ?

Un storage sert à enregistrer des données dans le navigateur afin de pouvoir les relire plus tard.

## 2. Quelle est la différence entre `localStorage` et `sessionStorage` ?

`localStorage` garde les données plus longtemps, même après fermeture du navigateur, alors que `sessionStorage` garde les données seulement pendant la session de l’onglet.

## 3. À quoi sert `setItem()` ?

`setItem()` sert à enregistrer une valeur associée à une clé.

## 4. À quoi sert `getItem()` ?

`getItem()` sert à lire la valeur associée à une clé.

## 5. À quoi sert `removeItem()` ?

`removeItem()` sert à supprimer une donnée précise du storage.

## 6. À quoi sert `clear()` ?

`clear()` sert à vider complètement le storage concerné.

## 7. Pourquoi faut-il utiliser `JSON.stringify()` pour un tableau ou un objet ?

Parce que le storage enregistre les données sous forme de texte. `JSON.stringify()` transforme donc le tableau ou l’objet en chaîne de caractères.

## 8. Pourquoi faut-il utiliser `JSON.parse()` lorsqu’on relit un tableau ou un objet ?

Parce qu’après lecture, la donnée récupérée est du texte. `JSON.parse()` permet de retrouver un vrai tableau ou un vrai objet JavaScript.

## 9. Quelle différence y a-t-il entre une variable JavaScript et une donnée enregistrée dans `localStorage` ?

Une variable JavaScript existe seulement pendant l’exécution actuelle du script, alors qu’une donnée enregistrée dans `localStorage` peut être retrouvée plus tard, même après rechargement.

## 10. Pourquoi le storage devient-il plus intéressant lorsqu’on le relie au DOM ?

Parce qu’il permet à la page de retrouver un état précédent et de réafficher des données ou des préférences utilisateur.

---

# Remarques pédagogiques utiles

Dans ces exercices, les étudiants doivent surtout retenir cette logique :

## 1. Identifier la donnée à mémoriser

Exemple : ville, prénom, thème, tableau de tâches.

## 2. Choisir une clé claire

Exemple : `"city"`, `"firstName"`, `"tasks"`.

## 3. Enregistrer la donnée

Avec `setItem()`.

## 4. Relire la donnée

Avec `getItem()`.

## 5. Vérifier si elle existe

Avec un test sur `null`.

## 6. Mettre à jour le DOM

Pour afficher la donnée dans la page.

---

# Pièges fréquents à surveiller

## Oublier que le storage enregistre du texte

Même si on stocke un nombre, un tableau ou un objet, le stockage se fait sous forme de chaîne.

## Oublier `JSON.stringify()`

Un tableau ou un objet doit être converti avant d’être stocké.

## Oublier `JSON.parse()`

Une donnée JSON relue dans le storage reste du texte tant qu’on ne la reconvertit pas.

## Confondre storage et affichage

Le storage conserve la donnée.
Le DOM l’affiche dans la page.

## Oublier la vérification `null`

Quand une clé n’existe pas, `getItem()` retourne `null`.

---
