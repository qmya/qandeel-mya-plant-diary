const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const plantList = require("../data/plant.json");
const userData = require ("../data/user.json");


router.get("/", (req, res) => {
 
  res.status(200).json(userData);
});

router.get("/:id", (req, res) => {
  
  const plantid = userData.find((item) =>   item.id === req.params.id);
  if (plantid) {
    res.status(200).json(plantid);
  } else {
    res.status(400).json("This plant item does not exist");
  }
});


// router.get('/userData', (req, res) => {
// 	res.status(200).json(userData);
// });

// router.post("/userData",(req,res)=>{
//   let {name,nickName} = req.body;
//   const foundPlant = plantList.find(plant => {return plant.name.toLowerCase() === name.toLowerCase()})
//   if(foundPlant){
//      userData.push({...foundPlant, nickName: nickName})
    
//      res.status(200).json(userData)
//   }else{
//      res.status(400).send("No Plants");
//   }
// })

// // router.put("/userData")

// router.delete("/:plantId",(req,res)=>{
//   if(userData.find(plant=> {return plant.id === req.params.plantId}
//   )){ 
//     let index = userData.findIndex(item=> item.id === req.params.plantId)
//     userData.splice(index,1)
//     res.status(200).send(...userData)
//   }else{res.status(400).send("Cant find the Plant")}
// });





// router.delete("/:plantid", (req, res) => {
//   const plantindex = plantList.findIndex(
//     (item) => item.id === req.params.plantid
//   );
//   if (plantindex !== -1) {
//     plantList.splice(plantindex, 1);
//     res.status(200).json(plantList);
//   } else {
//     res.status(404).json("This plant item does not exist");
//   }
// });

module.exports = router;
