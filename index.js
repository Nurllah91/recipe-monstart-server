const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const chefs = require('./data/data.json');



app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the Recipe monstar server')
  });

app.get('/chefs', (req, res) =>{
  res.send(chefs);
});


app.get('/chefs/:id', (req, res) =>{
  const id = req.params.id;
  const chef = chefs.find(cf => cf.id == id);
  res.send(chef);
})








  app.listen(port, () => {
    console.log(`Recipe monstar server is running on the port:${port}`)
  });