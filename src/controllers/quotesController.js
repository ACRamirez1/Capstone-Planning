const pool = require('../sql/connection')


const list = (req, res) => {
  pool.query("select * from quotes", (err, rows, fields) => {
    res.json(rows);
  });
};

const show = (req, res) => {
  const { id } = req.params;
  pool.query(`select * from quotes where id = ${id}`, (err, rows, fields) => {
    res.json(rows);
  });
};

const create = async (req, res) => {
  const { quote, author } = req.body;
  pool.query(
    "insert into quotes (id, quote, author) values (?, ?, ?)",
    [null, quote, author],
    (err, results, fields) => {
      res.json(results);
    }
  );

};

const update = (req, res) => {
  const { id } = req.params;
  pool.query(
    "update quotes set ? where id = ?",
    [req.body, id],
    (err, row, fields) => {
      res.json(row);
    }
  );
};

const remove = (req, res) => {
  const { id } = req.params;
  pool.query("delete from quotes where id = ?", [id], (err, row, fields) => {
    res.json(row);
  
  });;
};

module.exports = {
  list,
  show,
  create,
  update,
  remove
};