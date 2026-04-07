// Exercice 1
const addition = (a, b) => {
  return a + b;
};

const addition2 = (a, b) => a + b;

const carre = (x) => x * x;

const moyenne = (a, b) => {
  const resultat = (a + b) / 2;
  return resultat;
};

// Lire et modifier un objet
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  pages: 96,
};

console.log(livre.auteur);
console.log(livre["auteur"]);

console.log(`Le titres est ${livre.titre}`);
console.log("Le titres est " + livre.titre);

livre.pages = 100;
console.log(`Le nombre de pages est ${livre.pages}.`);

livre.disponible = true;

console.log(livre);

// Parcours des objets
const personne = {
  nom: "Maya",
  age: 22,
  ville: "Laval",
};

for (const key in personne) {
  console.log(`${key} : ${personne[key]} `);
}

// forEach
const fruits = ["pomme", "banane", "orange"];

fruits.forEach((element) => {
  console.log(element);
});

// map()
const nombres = [2, 4, 6];
const doubles = nombres.map((nombre) => nombre * 2);

console.log(nombres, doubles);

// filter
const valeurs = [4, 15, 8, 22, 9, 30];
const resultat = valeurs.filter((x) => x > 10);
console.log(valeurs, resultat);

//   find
const nombres_find = [3, 7, 9, 10, 12];
const resultat_find = nombres_find.find((y) => y % 2 == 0);

console.log(nombres_find, resultat_find);

// Some et Every
const notes = [55, 62, 71, 48];
const au_moins_superieur_a_60 = notes.some((note) => note >= 60);
const toutes_superieur_a_60 = notes.every((note) => note >= 60);
console.log(notes, au_moins_superieur_a_60, toutes_superieur_a_60);

//  reduce
const nombres_reduce = [5, 10, 15, 20];
const resultat_reduce = nombres_reduce.reduce((acc, nombre) => acc + nombre, 0);
console.log(resultat_reduce);

// Exercice 12
const etudiants = [
  { nom: "Lina", note: 78 },
  { nom: "Adam", note: 54 },
  { nom: "Sara", note: 88 },
  { nom: "Yanis", note: 61 },
];

const reussites = etudiants.filter((etudiant) => etudiant.note >= 60);
const noms = reussites.map((etudiant) => etudiant.nom);

console.log(etudiants, reussites, noms);

// Exercice 13
const produits = [
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 7 },
  { nom: "Sac", prix: 25 },
];

const noms_produits = produits.map((produit) => produit.nom);
console.log(noms_produits);

//  Exercices
const produits_moins_10 = produits.filter((produit) => produit.prix < 10);
console.log(produits_moins_10);

// Exercice 15
const films = [
  { titre: "The Drama", duree: 148, vu: true },
  { titre: "Coco", duree: 105, vu: false },
  { titre: "Interstellar", duree: 169, vu: true },
  { titre: "Up", duree: 96, vu: false },
];

const films_vus = films.filter((film) => film.vu);
console.log(films_vus);
const films_vus_titres = films_vus.map((film) => film.titre);
console.log(films_vus_titres);

const au_moins_un_film = films.some((film) => film.duree > 160);
console.log(au_moins_un_film);
