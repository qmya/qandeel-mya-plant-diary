const express = require("express");
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const plantList = require("../data/plant.json");

router.get("/", (req, res) => {
  res.status(200).json(plantList);
});

router.get("/:plantid", (req, res) => {
  const plantid = plantList.find((item) => item.id === req.params.plantid);
  if (plantid) {
    res.status(200).json(plantid);
  } else {
    res.status(400).json("This plant item does not exist");
  }
});

router.delete("/:plantid", (req, res) => {
  const plantindex = plantList.findIndex(
    (item) => item.id === req.params.plantid
  );
  if (plantindex !== -1) {
    plantList.splice(plantindex, 1);
    res.status(200).json(plantList);
  } else {
    res.status(404).json("This plant item does not exist");
  }
});

module.exports = router;
