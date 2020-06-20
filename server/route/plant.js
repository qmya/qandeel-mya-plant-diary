const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const plantList = require("../data/plant.json");
const userData = require("../data/user.json");

router.get("/", (req, res) => {
  res.status(200).json(userData);
});

router.get("/:id", (req, res) => {
  const plantid = userData.find((item) => item.id === req.params.id);
  if (plantid) {
    res.status(200).json(plantid);
  } else {
    res.status(400).json("This plant item does not exist");
  }
});
module.exports = router;
