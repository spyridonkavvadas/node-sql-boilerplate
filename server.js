require('dotenv').config()
require('colors');
const express = require("express");
const cors = require("cors");

const users = require('./api/users');
const orders = require('./api/orders');
const errorHandler = require('./middleware/error');
const connectDB = require('./dbinit');
const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello earthling!')
});

app.use('/users', users);
app.use('/orders', orders);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`.rainbow.bold.inverse));


