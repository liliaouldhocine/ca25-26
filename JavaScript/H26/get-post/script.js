const form = document.querySelector("#contactForm");
console.log(form);
const resultat = document.querySelector("#resultat");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const donnees = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:5050/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donnees),
    });

    const data = await response.json();

    if (!response.ok) {
      resultat.textContent =
        data.message || "Le formulaire contient une erreur.";
      return;
    }

    resultat.textContent = data.message;
    form.reset();
  } catch (error) {
    resultat.textContent = "Impossible de contacter le serveur.";
    console.error(error);
  }
});
