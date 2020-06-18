const express = require('express');
const app = express();

const cors = require('cors');
const plant = require('./route/plant.js');
const userdata =require('./route/user.js');

app.use(cors());
app.use(express.json());

app.use('/plant', plant);
app.use('/userData', userdata);


app.listen(8080, () => {
  console.log('Listening on port 8080');
});