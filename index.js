const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require('./src/sql/connection')
// const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const usersRoutes = require('./src/routes/usersRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
// const messageRoutes = require('./src/routes/messageRoutes');
const articlesRoutes = require('./src/routes/articlesRoutes');
const quotesRoutes = require('./src/routes/quotesRoutes');

const PORT = process.env.PORT || 4007;

function authenticateToken(req, res, next) {
  // Get meta information for request
  const authHeader = req.headers.authorization;
  console.log ({auth: req.headers.authorization})

  // Store the token in variable
  const token = authHeader && authHeader.split(" ")[1];
    console.log({token})

    // What if no token
    if(!token) return res.sendStatus(401);

    jwt.verify(token, 'Yihaw', (err, regUser) => {
      if (err) return res.sendStatus(403);

      req.regUser = regUser;
      console.log(req.regUser);
      next();
    })
}


app.use(cors());

app.use(express.static('public'));

app.use(express.json())
app.use('/users', authenticateToken, usersRoutes);
app.use('/quotes', authenticateToken, quotesRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
// app.use('/', messageRoutes);
app.use('/articles', authenticateToken, articlesRoutes);


app.get('/', (req, res) => {
  res.json({
    message: "Welcome to our server!",
  });
});

// app.get('/', (req, res) => {
//     // res.send('Welcome to our server!')
//     res.sendFile(path.join(__dirname, '/public/index.html'))
//   })
  
  app.listen(PORT, () => {
   console.log(`Web server is listening on port ${PORT}!`);
  });