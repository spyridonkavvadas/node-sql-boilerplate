const express = require("express");
const api = express.Router();

const db = require('../dbinit');

api.get("/", (req, res, next) => {
  db
    .query('SELECT * FROM users;')
    .then(data => res.json(data.rows))
    .catch(e => next(e));
});

api.get("/:id", (req, res, next) => {
  const { id } = req.params;

  db
    .query("SELECT * FROM users WHERE id=$1;", [id])
    .then(data => res.json(data.rows))
    .catch(e => next(e));
});

api.post("/", (req, res, next) => {
  const { name } = req.body;

  db
    .query('INSERT INTO users(first_name) values($1);', [name])
    .then(data => res.status(201).json(data))
    .catch(e => next(e));
});

api.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  db
    .query('DELETE FROM users WHERE id=$1;', [id])
    .then(data => res.status(201).json(data))
    .catch(e => next(e));
});

api.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  db
    .query('UPDATE users SET first_name=$1 WHERE id=$2;', [name, id])
    .then(data => res.status(201).json(data))
    .catch(e => next(e));
});

module.exports = api;