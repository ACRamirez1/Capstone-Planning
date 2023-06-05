let pool = require("../sql/connection");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const generateToken = (regUser) => {
  return jwt.sign(regUser, "Yihaw");
};

let login = (req, res) => {
  const { name, email, password } = req.body;

  pool.query(`select * from regUser where email = '${email}'`,
  async (err, results, fields) => {
    if (err) {
      console.log(err);
    }

    console.log(results);

    const match = await bcrypt.compare(password, results[0].password);

    if (match) {
      const token = generateToken(results[0]);
      res.json({
        token,
        regUser: req.regUser,
      });
    } else {
      res.sendStatus(404);
    }
  });
};

// const logout = (req, res) => {
//     console.log("Logging out");
//     if (req.session) {
//         req.session.destroy(err => {
//             if (err) {
//                 res.status(400).send('Unable to log out')
//             } else {
//                 res.send('Logout successful')
//             }
//         });
//     }else {
//         res.end()
//     }
// }

module.exports = { login };
