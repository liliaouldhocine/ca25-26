import { tabEtudiants } from "../donnees/etudiants.js";
// Exercices pratiques sur la manipulation d'un tableau d'étudiants en JavaScript.
// Règles :
// - Utilisez les méthodes de tableau JavaScript appropriées (forEach, filter, map, reduce, sort, etc.).
// - Affichez les résultats en console avec console.log() ou console.table() (pour les tableaux d'objets).
// - Ne modifiez pas le tableau original sauf si explicitement demandé dans la question.
// - Implémentez les solutions pour chaque question ci-dessous.
// Pour afficher les résultats :
// Ouvrez un terminal dans le dossier du projet et exécutez : node gestionEtudiants/gererEtudiants.js
// Les résultats de chaque question s'afficheront en console.
// Avant de afficher le résultat, affichez aussi le numéro de l'exercice comme ******** Q1 ********

// Q1. Afficher le nom complet de tous les étudiants en mode console selon le format "Prénom Nom".

const q1_afficherNomComplet = (etudiants = tabEtudiants) => {
  etudiants.forEach((etudiant) =>
    console.log(`${etudiant.prenom} ${etudiant.nom}`),
  );
};

// q1_afficherNomComplet();

// Q2. Afficher les étudiants ayant une moyenne supérieure à 85 en mode console.

const q2_afficherEtudiantsMoyenneSup85 = () =>
  q1_afficherNomComplet(
    tabEtudiants.filter((etudiant) => etudiant.moyenne > 85),
  );

const q2_afficherEtudiantsMoyenneSup85_v2 = () =>
  tabEtudiants
    .filter((etudiant) => etudiant.moyenne > 85)
    .forEach((etudiant) => console.log(`${etudiant.prenom} ${etudiant.nom}`));

// q2_afficherEtudiantsMoyenneSup85();
// q2_afficherEtudiantsMoyenneSup85_v2();

// Q3. Afficher les étudiants inscrits au programme "Informatique" en mode console.
const q3_afficherEtudiantEnInformatique = () => {
  q1_afficherNomComplet(
    tabEtudiants.filter((etudiant) => etudiant.programme == "Informatique"),
  );
};

// q3_afficherEtudiantEnInformatique();

// Q4. Calculer et afficher la moyenne générale de tous les étudiants en mode console.

// const nombres = [1, 2, 3, 4];

// const somme = nombres.reduce((acc, valeur) => {
//   return acc + valeur;
// }, 0);

// console.log(somme); // 10

const q4_afficherMoyenneGenerale = () => {
  const somme = tabEtudiants.reduce((acc, etudiant) => {
    return acc + etudiant.moyenne;
  }, 0);

  console.log(`La moyenne générale est de : ${somme / tabEtudiants.length}`);
};

// q4_afficherMoyenneGenerale();

// Q5. Afficher les étudiants âgés de plus de 22 ans en mode console.

const q5_afficherAgePlus22 = () => {
  q1_afficherNomComplet(tabEtudiants.filter((etudiant) => etudiant.age > 22));
};

// q5_afficherAgePlus22();

// Q6. Trier les étudiants par moyenne décroissante et afficher les noms en mode console.
const q6_afficherParMoyenneDecroissante = () => {
  q1_afficherNomComplet(
    tabEtudiants.sort(
      (etudiantA, etudiantB) => etudiantB.moyenne - etudiantA.moyenne,
    ),
  );
};

// q6_afficherParMoyenneDecroissante();

// const tri_moyenne = tabEtudiants.sort((a,b) => b.moyenne - a.moyenne).forEach(e => console.log(`${e.prenom} ${e.nom}: ${e.moyenne}`));

// Q7. Compter le nombre d'étudiants par programme et afficher en mode console.

const q7_compterNbrEtudiantsParProgramme = () => {
  const resultats = [];

  // [{ programme: "Le nomdu programme", nbdEtudiant: 45 }];
  // Voir si le programme est dans résultat
  // Si oui on augmente le nombre
  // Sinon on le crée

  tabEtudiants.forEach((etudiant) => {
    let registeredProgramme = resultats.find(
      (resultat) => resultat.programme == etudiant.programme,
    );
    if (registeredProgramme) {
      registeredProgramme.nbdEtudiant += 1;
    } else {
      resultats.push({ programme: etudiant.programme, nbdEtudiant: 1 });
    }
  });

  console.table(resultats);
};

// q7_compterNbrEtudiantsParProgramme();

// ---- solution Francis

const solutionFrancis = () => {
  let statprogramme = etudiants.reduce((total, etudiant) => {
    let programme = etudiant.programme;

    if (total[programme]) {
      total[programme]++;
    } else {
      total[programme] = 1;
    }
    return total;
  }, {});

  console.table(statprogramme);
};
// Q8. Afficher l'étudiant avec la moyenne la plus élevée en mode console.

// Q9. Ajoutez un nouvel étudiant avec les données suivantes : id = 7, nom = 'Smith', prenom = 'John', age = 24, courriel = 'john.smith@example.com', programme = 'Mathématiques', moyenne = 90. Ajoutez-le au tableau tabEtudiants, puis affichez tous les étudiants en mode console.
const q9_ajoutDUnEtudiant = () => {
  tabEtudiants.push({
    id: 7,
    nom: "Smith",
    prenom: "John",
    age: 24,
    courriel: "john.smith@example.com",
    programme: "Mathématiques",
    moyenne: 90,
  });
  q1_afficherNomComplet();
};

// q9_ajoutDUnEtudiant();

// Q10. Modifiez seulement la moyenne et ajoutez +1 à l'âge actuel de l'étudiant avec id = 3. La nouvelle moyenne est fixée dans la variable suivante : const nouvelleMoyenne = 89; Modifiez l'étudiant et affichez tous les étudiants en mode console.

// Q11. Supprimez l'étudiant avec id = 4. L'id est fixé dans la variable suivante : const idASupprimer = 4; Supprimez l'étudiant et affichez tous les étudiants en mode console.

// Q12. Trouvez et affichez l'étudiant avec la moyenne la plus basse en mode console.

// Q13. Calculez et affichez la moyenne des moyennes pour chaque programme en mode console (par exemple : Informatique: 85, Biologie: 92, etc.).
const solutionMathieu = () => {
  const statsParProgramme = tabEtudiants.reduce((acc, e) => {
    const p = e.programme;
    if (!acc[p]) {
      acc[p] = { somme: 0, nb: 0 };
    }

    acc[p].somme += e.moyenne;
    acc[p].nb++;
    return acc;
  }, {});

  console.log("\nVisualisation des calculs:");
  console.log(statsParProgramme);

  console.log("\nMoyenne des moyennes:");
  const moyenneDesMoyennes = Object.entries(statsParProgramme).map(
    ([nom, data]) => ({
      Programme: nom,
      Moyenne: (data.somme / data.nb).toFixed(2),
    }),
  );
  console.log(moyenneDesMoyennes);
};

// solutionMathieu();

const q13_calculerMoyenneDesEtudiantsParProgramme = () => {
  const resultats = [];

  tabEtudiants.forEach((etudiant) => {
    let registeredProgramme = resultats.find(
      (resultat) => resultat.programme == etudiant.programme,
    );
    if (registeredProgramme) {
      registeredProgramme.nbdEtudiant += 1;
      registeredProgramme.sommeDesMoyennes += etudiant.moyenne;
    } else {
      resultats.push({
        programme: etudiant.programme,
        nbdEtudiant: 1,
        sommeDesMoyennes: etudiant.moyenne,
      });
    }
  });

  const resultatsDesMoyennes = resultats.map((resultat) => ({
    programme: resultat.programme,
    // nbdEtudiant: 1,
    // sommeDesMoyennes: resultat.sommeDesMoyennes,
    moyMoyennes: (resultat.sommeDesMoyennes / resultat.nbdEtudiant).toFixed(2),
  }));

  console.table(resultatsDesMoyennes);
};

// q13_calculerMoyenneDesEtudiantsParProgramme();c

const solutionAntonio = () => {
  console.log(
    "\nQ13. Calculez et affichez la moyenne des moyennes pour chaque programme en mode console.",
  );
  // MySQL :
  // SELECT programme, AVG(moyenne) AS moyenne_programme
  // FROM etudiants
  // GROUP BY programme;
  const totalParProgramme = tabEtudiants.reduce((accumulateur, etudiant) => {
    if (!accumulateur[etudiant.programme]) {
      accumulateur[etudiant.programme] = {
        somme: 0,
        nombre: 0,
      };
    }

    accumulateur[etudiant.programme].somme += etudiant.moyenne;
    accumulateur[etudiant.programme].nombre += 1;
    return accumulateur;
  }, {});

  Object.keys(totalParProgramme).forEach((programme) => {
    const somme = totalParProgramme[programme].somme;
    const nombre = totalParProgramme[programme].nombre;
    const moyenneProgramme = somme / nombre;
    console.log(`${programme}: ${moyenneProgramme.toFixed(2)}`);
  });
};

// Q14. Triez les étudiants par âge croissant, puis par moyenne décroissante en cas d'égalité d'âge, et affichez les noms complets en mode console.

// Q15. Créez une fonction qui prend un programme en paramètre et retourne la liste des étudiants de ce programme triés par moyenne décroissante. Testez-la avec le programme "Physique" et affichez le résultat en mode console.

const fruits = ["Banane", "Pomme", "Fraise"];
const etudiant = {
  id: 1,
  nom: "Dupont",
  prenom: "Jean",
  age: 22,
  courriel: "jean.dupont@exemple.com",
  programme: "Informatique",
  moyenne: 85,
};

// console.log("Keys", Object.keys(etudiant));
// console.log("Entries", Object.entries(etudiant));

Object.keys(etudiant).forEach((key) => {
  console.log(etudiant[key]);
});

Object.entries(etudiant).forEach((entry) =>
  console.log(`Pour la key : ${entry[0]}, nous abvons la valeur ${entry[1]}`),
);
