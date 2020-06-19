const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const plantList = require("../data/plant.json");
const userData = require("../data/user.json");

router.get("/", (req, res) => {
  res.status(200).json(userData);
});

router.post("/", (req, res) => {
  let { name, nickName } = req.body;
  const foundPlant = plantList.find((plant) => {
    return plant.name.toLowerCase() === name.toLowerCase();
  });
  if (foundPlant) {
    userData.push({ ...foundPlant, nickName: nickName });
    res.status(200).json(userData);
  } else {
    res.status(400).send("No Plants");
  }
});

router.post("/:id", (req, res) => {
  const foundPlant = userData.find((plant) => {
    return plant.id === req.params.id;
  });
  foundPlant.lastWateredDate = req.body.date;
  res.status(200).json(foundPlant);
});

router.delete("/:plantId", (req, res) => {
  let index = userData.findIndex((item) => item.id === req.params.plantId);
  if (index === -1) {
    res.status(400).send("Cant find the Plant");
  }
  userData.splice(index, 1);
  res.status(200).send(userData);
});

module.exports = router;
