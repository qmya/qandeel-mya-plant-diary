const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const plantList = require("../data/plant.json");
const userData = require ("../data/user.json");


router.get("/", (req, res) => {
  res.status(200).json(plantList);
});

router.get("/plant:id", (req, res) => {
  const plantid = plantList.find((item) => item.id === req.params.plantid);
  if (plantid) {
    res.status(200).json(plantid);
  } else {
    res.status(400).json("This plant item does not exist");
  }
});

router.get('/userData', (req, res) => {
	res.status(200).json(userData);
});

router.post("/userData",(req,res)=>{
  let {name} = req.body;
  if(plantList.find(plant => {return plant.name=== name}) ){
     userData.push(req.body)
    
     res.status(200).json(userData)
  }else{
     res.status(400).send("No Plants");
  }
})


// router.post('/plant',(request,response) =>{
//   const iteminfo =request.body;
//   if(
//     plantList.find(name => {
//      return name.name === iteminfo.name
//     }){userdata.push(iteminfo)}
// )}
// })


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
