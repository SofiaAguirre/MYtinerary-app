const express = require("express");
const router = express.Router();
const Itinerary = require("../models/itineraries");
//Get a list of all the Itineraries
router.get("/itineraries", function (req, res) {
    Itinerary.find({}).then(function (itineraries) {
        res.send(itineraries);
    })
});
//Get a list of de Itineraries
router.get("/itineraries/:city", function (req, res) {
    Itinerary.find({city : req.params.city}).then(function (itineraries) {
        res.send(itineraries);
    })
});
// Add a new Itinerary
router.post("/itineraries", function (req, res) {
    Itinerary.create(req.body).then(function (itineraries) {
        res.send(itineraries);
    });
});


module.exports = router;
