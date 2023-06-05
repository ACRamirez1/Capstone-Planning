const pool = require("../sql/connection");

const list = (req, res) => {
  pool.query("select * from regUser", (err, rows, fields) => {
    res.json(rows);
  });
};

const show = (req, res) => {
  const { id } = req.params;
  pool.query(`select * from regUser where id = ${id}`, (err, rows, fields) => {
    res.json(rows);
  });
};

const create = async (req, res) => {
  const { name, email, password } = req.body;
  pool.query(
    "insert into regUser (id, name, email, password) values (?, ?, ?, ?)",
    [null, name, email, password],
    (err, results, fields) => {
      res.json(results);
    }
  );
};

const update = (req, res) => {
  const { id } = req.params;
  pool.query(
    "update regUser set ? where id = ?",
    [req.body, id],
    (err, row, fields) => {
      res.json(row);
    }
  );
};

const remove = (req, res) => {
  const { id } = req.params;
  pool.query("delete from regUser where id = ?", [id], (err, row, fields) => {
    res.json(row);
  
  });
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
