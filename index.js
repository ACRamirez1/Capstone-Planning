const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./src/sql/connection");
// const path = require('path');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const usersRoutes = require("./src/routes/usersRoutes");
const registerRoutes = require("./src/routes/registerRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
// const messageRoutes = require('./src/routes/messageRoutes');
const articlesRoutes = require("./src/routes/articlesRoutes");
const quotesRoutes = require("./src/routes/quotesRoutes");

const PORT = process.env.PORT || 4007;

function authenticateToken(req, res, next) {
  // Get meta information for request
  const authHeader = req.headers.authorization;
  console.log({ auth: req.headers.authorization });

  // Store the token in variable
  const token = authHeader && authHeader.split(" ")[1];
  console.log({ token });

  // What if no token
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "Yihaw", (err, regUser) => {
    if (err) return res.sendStatus(403);

    req.regUser = regUser;
    console.log(req.regUser);
    next();
  });
}

function setHeader(req, res, next) {
  // website we wish to allow content
  res.setHeader(
    "Access-Control-Allow-Origin", 
    "https://boisterous-unicorn-1350e0.netlify.app"
    // "http://localhost:3000"
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "POST"
  );

  // Type of content we wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );

  // Set to true if you need the website to include cookies in the request sent
  // to the API (e.g., in case you use sessions)
  res.setHeader(
    "Access-Control-Allow-Credentials", 
    true
  );

  next();
}


app.use(express.static("public"));

app.use(cors());

// app.use(setHeader);
app.use(express.json());
app.use("/users", authenticateToken, usersRoutes);
app.use('/quotes', authenticateToken, quotesRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
// app.use('/', messageRoutes);
app.use("/articles", authenticateToken, articlesRoutes);

app.get("/", (req, res) => {
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
