const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Importez les routes depuis le fichier routes.js
const userRoutes = require("./routes/userRoutes");

// Utilisez les routes pour gérer les opérations CRUD des utilisateurs
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
