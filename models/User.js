const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Only max 50 chars are allowed for the name']
  },
  surname: {
    type: String,
    required: [true, 'Please add a surname'],
    maxlength: [50, 'Only max 50 chars are allowed for the surname']
  },
  age: {
    type: Number,
    max: 120
  }
});

// collection called users
module.exports = mongoose.model('User', UserSchema);