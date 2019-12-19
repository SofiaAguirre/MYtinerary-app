const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create Users Schema & Model

const UserSchema = new Scheme({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
    },
    profileImg: {
      type: String,
      required: true
    },
    favourite: {
      type: Array
    }
  });
  UserSchema.plugin(uniqueValidator, { message: 'Error, user already exist' });
  const User = mongoose.model ('user', UserSchema);
  
  module.exports = User;