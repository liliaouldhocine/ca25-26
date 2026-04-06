// console.log(document.children[0].children);
// console.log(document.children[0].children[1]);

// const image = document.body.children[0].children[0];

// console.log(image.src);

// image.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPFsIY78IOORm__asM6vwpXrHKrAhmk-xEA&s";

// console.log(document.querySelector(".image"));
// const navigation = document.querySelector("nav");
// const accueil = document.querySelector(".nav");
// console.log(accueil);
// console.log(accueil.closest(".flex"));

const input = document.querySelector("#firstName");
// console.log(input.value);

const leFormulaire = document.querySelector("form");

input.addEventListener("change", (event) => {
  console.log(input.value);
});

leFormulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  console.log(input.value);
});
