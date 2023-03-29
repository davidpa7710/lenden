const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    required: [true, 'Mail necessary'],
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
