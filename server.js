require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')

const users = require('./api/users');
const app = express();

app.use(bodyParser.json())
app.use('/users', users);

app.get("/", (req, res) => res.send("hello world"));

/*app.get("/orders", (req, res) => {
  pool
    .query('SELECT * FROM orders;')
    .then(data => res.json(data.rows))
    .catch(e => res.sendStatus(500));
});

app.get("/orders/:id", (req, res) => {
 const { id } = req.params;
 pool
   .query("SELECT * FROM orders WHERE id=$1;", [id])
   .then(data => res.json(data.rows))
   .catch(e => res.sendStatus(500));
});*/

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen('3000', () => console.log('connected'));

