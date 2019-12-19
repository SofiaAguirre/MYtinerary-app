const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//Create Itinerary Schema & Model

const ItinerarySchema = new Scheme({
  profileImg: {
    type: String
  },
  profileName: {
    type: String
  },
  title: {
    type: String
  },
  likes: {
    type: Number
  },
  hours: {
    type: Number
  },
  price: {
    type: String
  },
  hashtags: {
    type: [String]
  },
  city: {
    type: String
  },
  activities: [{
    name: {
      type: String,
      required: [true, 'Name of activity is required']
    },
    about: {
      type: String
    },
    picture: {
      type: String,
      required: [true, 'Picture of activity is required']
    },
  }]
});

const Itinerary = mongoose.model('itinerary', ItinerarySchema);

module.exports = Itinerary;