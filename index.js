const express = require("express");
// require("dotenv").config();
const path = require('path');


const authRoutes = require('./src/routes/authRoutes');
const messageRoutes = require('./src/routes/messageRoutes');
const articlesRoutes = require('./src/routes/articlesRoutes')


const app = express();

const port = process.env.PORT || 4005;

app.use(express.static('public'));

app.use(express.json())


app.use('/', authRoutes);
app.use('/', messageRoutes);
app.use('/articles', articlesRoutes);



app.get('/', (req, res) => {
    // res.send('Welcome to our server!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })
  
  app.listen(port, () => {
   console.log(`Web server is listening on port ${port}!`);
  });