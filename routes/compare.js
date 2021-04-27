const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');


router
    .route("/")
    .get((req, res) => {
    // res.sendFile(path.join(__dirname + '/../view/compare.html'));
    res.render('compare');
    })
    .post((req, res)=> {
        console.log(req.body)
        comparePokemon(object1, object2)
        res.render('compare');
    })

var object1 = {name: 'idk', level: 4, moves: 5}
var object2 = {name: 'idk2', level: 6, moves: 4}

function comparePokemon(first, second){
    // search pokemon like normal
    // pull up random pokemon
    // pokemon with higher average stats wins and does bouncy animation?

    // console.log("/search POST starting...")
    // const pokemon = req.body.pokemon
    // let lowerPoke = validateForm(pokemon);
    // const data = await P.apiCall(lowerPoke);
    
    // console.log(`Did you do a good job ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}?`)
    // console.log(JSON.stringify(data.abilities.ability));
    // res.sendFile(path.join(__dirname + '/../view/search.html'));
    // console.log("If pokemon name is shown before POST ending, it works!")
    // console.log("/search POST ending...")

    if (first && second){
        console.log(first.level)
        let firstStats = first.level + first.moves;
        let secondStats = second.level + second.moves;
        if (firstStats > secondStats) {
            console.log('Pokemon 1 is the stronger Pokemon?')
        } else 
            console.log('Pokemon 2 is the stronger Pokemon')
    } else 
        console.log('Comparison failed')
}

// function compareRandom(pokemon) {
//     // let lowerPoke = validateForm(pokemon);
//     // const data = await P.apiCall(lowerPoke);
//     let randomPokeNum = Math.floor((Math.random() * 150) + 1);
//     let randomPokeData = await P.apiCall(randomPokeNum); 

//     if (pokemon){
//         if (pokemon)
//     }
// }

function validateForm(input) {
    let lowerInput = input.toLowerCase();
    return (lowerInput);
    }

module.exports = router;