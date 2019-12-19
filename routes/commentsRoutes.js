const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");
//Get a list of all Comments
router.get("/comments", function (req, res) {
    Comment.find({}).then(function (comments) {
        res.send(comments);
    })
});
//Get a list of de Comments by ID
router.get("/comments/:ItineraryId", function (req, res) {
    Comment.find({ ItineraryId: req.params.ItineraryId }).then(function (comments) {
        res.send(comments);
    })
});
// Add a new Comment
router.post("/comments", function (req, res) {
    Comment.create(req.body).then(function (comment) {
        res.send(comment);
    });
});


module.exports = router;