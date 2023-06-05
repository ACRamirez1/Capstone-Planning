let pool = require("../sql/connection");
const bcrypt = require("bcrypt");

let register = async (req, res) => {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  console.log({ passwordHash });

  pool.query(
    "insert into regUser (id, name, email, password) values (?, ?, ?, ?)",
    [null, name, email, passwordHash],
    (err, results, fields) => {
      res.json(results);
    }
  );
};

module.exports = { register };
