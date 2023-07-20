const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDay: {
    type: Date,
    required: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
