const express = require("express");
const router = express.Router();
const City = require("../models/cities");

//Get a list of the Cities
router.get("/cities", function (req, res) {
  City.find({}).then(function (cities) {
    res.send(cities);
  })
});
//Add a new City
router.post("/cities", function (req, res) {
  City.create(req.body).then(function (city) {
    res.send(city);
  });
});
//Update a City from the Database
router.put("/cities/:id", function (req, res) {
  City.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    City.findOne({ _id: req.params.id }).then(function (city) {
      res.send(city);
    })
  })
});
//Delete a City from the Database
router.delete("/cities/:id", function (req, res) {
  City.findByIdAndRemove({ _id: req.params.id }).then(function (city) {
    res.send(city);
  });
});

module.exports = router;
