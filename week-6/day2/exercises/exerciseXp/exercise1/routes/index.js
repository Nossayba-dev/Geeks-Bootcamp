const express = require("express");
const router = express.Router();

// Route GET /
router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Route GET /about
router.get("/about", (req, res) => {
  res.send("About Page");
});

module.exports = router;
