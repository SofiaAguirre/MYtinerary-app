const express = require("express");
const router = express.Router();
const Favourite = require("../models/favourites");
// Get Favourites by userID
router.get("/favourites/:UserId", function (req, res) {
    Favourite.find({ UserId: req.params.UserId }).then(function (favourites) {
        res.send(favourites);
    })
});
// Add a new Favourite 
router.post("/favourites", function (req, res) {
    const favouriteData = {
        ItineraryId: req.body.ItineraryId,
        UserId: req.body.UserId
    }
    Favourite.findOne({
        ItineraryId: req.body.ItineraryId,
        UserId: req.body.UserId
    })
        .then(favourite =>{
            if (!favourite){
                Favourite.create(favouriteData).then(function (favourites) {
                    res.send(favourites);
                })
                .catch(err => {
                    res.send('error:' + err)
                });
            }else{
                res.send('Already favorited!')
            }
        })
    
});
//Remove a Favourite
router.delete("/favourites/:id", function (req, res) {
    Favourite.findByIdAndRemove({ _id: req.params.id }).then(function (favourites) {
        res.send(favourites);
    });
});
module.exports = router;