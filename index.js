const express = require("express");

const path = require('path');

const app = express();

const port = process.env.PORT || 4005;

app.use(express.static('public'));

app.use(express.json())












app.get('/', (req, res) => {
    // res.send('Welcome to our server!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })
  
  app.listen(port, () => {
   console.log(`Web server is listening on port ${port}!`);
  });