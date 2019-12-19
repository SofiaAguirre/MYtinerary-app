const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
//Create City Schema & Model

const CitySchema = new Scheme({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String
  },
  img: {
    type: String
  }
});
CitySchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
const City = mongoose.model ('city', CitySchema);

module.exports = City;

