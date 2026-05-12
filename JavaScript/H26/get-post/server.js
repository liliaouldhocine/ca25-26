const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Permet au header d'interpréter les requêtes
app.use(express.json()); // permet au header de recevoir des string json
app.use(express.urlencoded({ extended: true })); // permet de recevoir des paramètres en url

app.get("/", (req, res) => {
  res.json("Coucou !");
});

app.get("/mathieu", (req, res) => {
  res.json("Coucou Mathieu!");
});

app.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.json("done !");
});

const PORT = 5050;
const serveur = app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}`);
});
