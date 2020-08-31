require('dotenv').config()
const express = require("express");

const users = require('./api/users');
const errorHandler = require('./middleware/error');
const app = express();

app.use(express.json());
app.use('/users', users);
app.use(errorHandler);

app.listen('3000', () => console.log('connected'));

