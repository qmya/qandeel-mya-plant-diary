const express = require('express');
const app = express();
const cors = require('cors');
const plant = require('./route/plant.js');


app.use(cors());
app.use(express.json());

app.use('/plant', plant);



app.listen(8080, () => {
  console.log('Listening on port 8080');
});