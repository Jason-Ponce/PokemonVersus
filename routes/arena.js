const express = require('express');
const router = express.Router();
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');


// TODO
// -User will enter arena
// -User will login or join anonymously
// -User will connect with another player(thru a battle request?)
// -User will choose pokemon team(apiCalls maybe ajax?)
// -User will take turns battling (we can just do a rock paper scissors or something for battling)

//temp pokemon data for ejs
const pokemonOne = {name : "Venusaur", level : "100", hp: 3, imgLoc : "./img/temp/3_back.png"};
const pokemonTwo = {name : "Charizard", level : "100", hp: 3, imgLoc : "./img/temp/6.png"}
const pokemonObj = {user : pokemonOne, opponent : pokemonTwo};
//end of temp pokemon data for ejs

router
    .route("/")
    .post(async(req, res) => {
        res.render('arena', {
            game : pokemonObj
        });
    })
    .get((req, res) => {
        res.render('arena', {
            game : pokemonObj
        });
    })


    module.exports = router;