const express = require("express");
const router = express.Router();

// Middleware pour gérer les requêtes HTTP
router.get("/", (req, res) => {
  // Logique pour récupérer tous les utilisateurs
  res.send("Liste de tous les utilisateurs");
});

router.get("/:id", (req, res) => {
  // Logique pour récupérer un utilisateur par ID
  const userId = req.params.id;
  res.send(`Utilisateur avec l'ID ${userId}`);
});

router.post("/", (req, res) => {
  // Logique pour créer un nouvel utilisateur
  res.send("Nouvel utilisateur créé");
});

router.put("/:id", (req, res) => {
  // Logique pour mettre à jour un utilisateur par ID
  const userId = req.params.id;
  res.send(`Utilisateur avec l'ID ${userId} mis à jour`);
});

router.delete("/:id", (req, res) => {
  // Logique pour supprimer un utilisateur par ID
  const userId = req.params.id;
  res.send(`Utilisateur avec l'ID ${userId} supprimé`);
});

module.exports = router;
