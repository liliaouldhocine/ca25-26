# Corrigé — Interactions plus riches avec le DOM en JavaScript

## Exercice 1 — Afficher et masquer un paragraphe

### Corrigé `script.js`

```js
const info = document.getElementById("info");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});
```

### Explication

- on sélectionne le paragraphe et le bouton
- au clic, on vérifie la valeur de `display`
- si le paragraphe est caché, on le réaffiche
- sinon, on le masque

---

## Exercice 2 — Afficher et masquer avec une classe CSS

### Corrigé `script.js`

```js
const message = document.getElementById("message");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});
```

### Réponse à la question

Cette approche est souvent plus propre, car elle sépare mieux les rôles :

- le CSS définit l’apparence
- JavaScript change seulement l’état de l’élément

---

## Exercice 3 — Changer le texte du bouton selon l’état

### Corrigé `script.js`

```js
const details = document.getElementById("details");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  details.classList.toggle("hidden");

  if (details.classList.contains("hidden")) {
    toggleBtn.textContent = "Afficher";
  } else {
    toggleBtn.textContent = "Masquer";
  }
});
```

### Explication

- `toggle()` ajoute ou retire la classe
- `contains()` permet ensuite de vérifier si l’élément est caché
- le texte du bouton s’adapte à l’état actuel du paragraphe

---

## Exercice 4 — Changer l’état visuel d’une carte

### Corrigé `script.js`

```js
const card = document.getElementById("card");
const selectBtn = document.getElementById("selectBtn");

selectBtn.addEventListener("click", () => {
  card.classList.toggle("selected");

  if (card.classList.contains("selected")) {
    selectBtn.textContent = "Désélectionner";
  } else {
    selectBtn.textContent = "Sélectionner";
  }
});
```

### Explication

- la classe `selected` représente l’état visuel de la carte
- au clic, on alterne entre sélectionnée et non sélectionnée
- le bouton change lui aussi de texte pour refléter l’action possible

---

## Exercice 5 — Gérer plusieurs boutons sur une même page

### Corrigé `script.js`

```js
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const message = document.getElementById("message");

showBtn.addEventListener("click", () => {
  message.style.display = "block";
});

hideBtn.addEventListener("click", () => {
  message.style.display = "none";
});
```

### Réponse à la question

Ici, chaque bouton a un rôle précis :

- un bouton affiche
- un autre masque

Avec `toggle()`, un seul bouton alterne entre deux états.
Avec deux boutons séparés, chaque action est plus explicite.

---

## Exercice 6 — Plusieurs événements sur un même élément

### Corrigé `script.js`

```js
const boxBtn = document.getElementById("boxBtn");
const message = document.getElementById("message");

boxBtn.addEventListener("mouseover", () => {
  message.textContent = "La souris est sur le bouton.";
});

boxBtn.addEventListener("mouseout", () => {
  message.textContent = "La souris a quitté le bouton.";
});

boxBtn.addEventListener("click", () => {
  message.textContent = "Le bouton a été cliqué.";
});
```

### Explication

Le même élément peut écouter plusieurs événements différents.
Ici, le bouton réagit :

- au survol
- au départ de la souris
- au clic

---

## Exercice 7 — Mettre plusieurs éléments en évidence

### Corrigé `script.js`

```js
const items = document.querySelectorAll(".item");
const highlightBtn = document.getElementById("highlightBtn");

highlightBtn.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("highlight");
  });
});
```

### Explication

- `querySelectorAll()` sélectionne tous les éléments avec la classe `item`
- `forEach()` permet de parcourir chaque paragraphe
- on applique la même transformation à chacun

---

## Exercice 8 — Observer la propagation des événements

### Corrigé `script.js`

```js
const parent = document.getElementById("parent");
const childBtn = document.getElementById("childBtn");
const message = document.getElementById("message");

childBtn.addEventListener("click", () => {
  message.textContent = "Le bouton a reçu le clic.";
});

parent.addEventListener("click", () => {
  console.log("Le parent a reçu le clic.");
});
```

### Réponse à la question

Les deux messages apparaissent parce que le clic touche d’abord le bouton, puis remonte vers son parent.
C’est un exemple de propagation des événements.

---

## Exercice 9 — Empêcher la propagation

### Corrigé `script.js`

```js
const parent = document.getElementById("parent");
const childBtn = document.getElementById("childBtn");
const message = document.getElementById("message");

childBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  message.textContent = "Le bouton a reçu le clic.";
});

parent.addEventListener("click", () => {
  console.log("Le parent a reçu le clic.");
});
```

### Réponse à la question

Dans cette version, le clic ne remonte plus jusqu’au parent.
Le bouton reçoit bien l’événement, mais le parent ne réagit plus à ce clic-là.

---

## Exercice 10 — Découvrir la délégation d’événements

### Corrigé `script.js`

```js
const taskList = document.getElementById("taskList");

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});
```

### Explication

- l’écouteur est placé sur la liste `ul`
- `event.target` représente l’élément réellement cliqué
- si cet élément est un `li`, on ajoute ou retire la classe `done`

C’est une première forme de délégation d’événements.

---

## Exercice 11 — Petit défi intégrateur : ouvrir et fermer une section d’aide

### Corrigé `script.js`

```js
const toggleHelpBtn = document.getElementById("toggleHelpBtn");
const helpSection = document.getElementById("helpSection");
const helpText = document.getElementById("helpText");
const selectTextBtn = document.getElementById("selectTextBtn");

toggleHelpBtn.addEventListener("click", () => {
  helpSection.classList.toggle("hidden");

  if (helpSection.classList.contains("hidden")) {
    toggleHelpBtn.textContent = "Afficher l’aide";
  } else {
    toggleHelpBtn.textContent = "Masquer l’aide";
  }
});

selectTextBtn.addEventListener("click", () => {
  helpText.classList.toggle("selected");

  if (helpText.classList.contains("selected")) {
    selectTextBtn.textContent = "Désélectionner le texte";
  } else {
    selectTextBtn.textContent = "Sélectionner le texte";
  }
});
```

### Explication

Cet exercice rassemble plusieurs idées importantes :

- afficher ou masquer une section
- utiliser `toggle()` pour changer un état
- utiliser `contains()` pour vérifier une classe
- adapter le texte d’un bouton selon l’état
- gérer plusieurs interactions dans la même page

---

# Corrigé des questions de synthèse

## 1. À quoi sert `classList.toggle()` ?

`classList.toggle()` sert à ajouter une classe si elle est absente, ou à la retirer si elle est déjà présente.

## 2. À quoi sert `classList.contains()` ?

`classList.contains()` sert à vérifier si une classe précise est présente sur un élément.

## 3. Quelle différence y a-t-il entre masquer un élément avec `style.display` et avec une classe CSS ?

Avec `style.display`, on modifie directement le style dans JavaScript.
Avec une classe CSS, on laisse le CSS définir l’apparence et JavaScript change seulement l’état.

## 4. Pourquoi un même élément peut-il avoir plusieurs événements ?

Parce qu’un élément peut réagir à plusieurs actions différentes, comme un clic, un survol ou un départ de la souris.

## 5. Qu’est-ce que la propagation des événements ?

La propagation des événements est le fait qu’un événement reçu par un élément peut aussi remonter à ses éléments parents.

## 6. À quoi sert `stopPropagation()` ?

`stopPropagation()` sert à empêcher un événement de remonter vers les éléments parents.

## 7. Quelle est l’idée générale de la délégation d’événements ?

La délégation d’événements consiste à placer un écouteur sur un parent et à vérifier quel enfant a réellement été cliqué.

## 8. Pourquoi la délégation peut-elle être utile quand on a plusieurs éléments semblables ?

Parce qu’elle évite de répéter le même écouteur sur chaque élément, ce qui simplifie le code et fonctionne aussi avec des éléments ajoutés plus tard.

---

# Remarques pédagogiques utiles

Dans ces exercices, les étudiants doivent surtout apprendre à repérer la logique suivante :

## 1. Quel élément change ?

Exemple : un paragraphe, une carte, une section, une tâche.

## 2. Quel événement déclenche ce changement ?

Exemple : `click`, `mouseover`, `mouseout`.

## 3. Quel état veut-on représenter ?

Exemple : visible, caché, sélectionné, terminé.

## 4. Comment représenter cet état ?

Exemple : avec `style.display`, une classe CSS, `toggle()`, `contains()`.

C’est cette structure de pensée qui doit devenir naturelle.

---

# Pièges fréquents à surveiller

## Confondre l’élément qui déclenche l’action et l’élément qui change

Par exemple, le bouton déclenche l’action, mais c’est souvent un autre élément qui est modifié.

## Oublier que `toggle()` alterne à chaque clic

Le comportement peut sembler étrange si l’étudiant ne garde pas en tête qu’on change d’état à chaque interaction.

## Ne pas comprendre pourquoi le parent réagit aussi

Quand cela arrive, il faut penser à la propagation.

## Oublier que `event.target` correspond à l’élément réellement cliqué

C’est essentiel pour comprendre la délégation d’événements.

---
