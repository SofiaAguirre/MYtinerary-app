const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//Create City Schema & Model

const CommentsSchema = new Scheme({
  message: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  profileImg: {
    type: String
  },
  ItineraryId: {
    type: String
  },
});

const Comments = mongoose.model ('comment', CommentsSchema);

module.exports = Comments;

