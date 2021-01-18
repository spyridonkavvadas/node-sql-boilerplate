const User = require('../models/User');
//const Order = require('../models/Order');
//const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Types;

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ success: true, msg: 'show all users', data: users })
  } catch(err) {
    next(err)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ success: true, msg: 'show selected user', data: user })
  } catch(err) {
    next(err)
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, surname, age } = req.body;
    const user = await User.create({ name, surname, age});

    res.json({ success: true, msg: 'show new user', data: user })
  } catch(err) {
    next(err)
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.json({ success: true, msg: `user with id ${id} deleted`, data: user })
  } catch(err) {
    next(err) 
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, surname, age } = req.body;
    
    const user = await User.findByIdAndUpdate(id, { name, surname, age }, { new: true });
    res.json({ success: true, msg: `user with id ${id} updated`, data: user })
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}