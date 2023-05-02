const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Welcome to the Recipe monstar server')
  });


  app.listen(port, () => {
    console.log(`Recipe monstar server is running on the port:${port}`)
  });