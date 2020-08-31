const express = require("express");
const api = express.Router();

const db = require('../dbinit');

api.get("/", (req, res, next) => {
  db
    .query('SELECT * FROM orders;')
    .then(data => res.json(data.rows))
    .catch(e => next(e));
});

api.get("/:id", (req, res, next) => {
  const { id } = req.params;

  db
    .query("SELECT * FROM orders WHERE id=$1;", [id])
    .then(data => res.json(data.rows))
    .catch(e => next(e));
});

module.exports = api; 
