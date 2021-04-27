const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');

router
    .route("/")
    .get((req, res) => {
      //const pokemon = req.body.pokemon;
      // console.log(pokemon +'pokemon in get')
      //getStats(stat1);
      comparePokemon(stat1, stat2);
      res.sendFile(path.join(__dirname + '/../view/compare.html'));
      // res.render('/ejs route here????');
    })
    .post((req, res)=> {
        res.sendFile(path.join(__dirname + '/../view/compare.html'));
    })

var stat1 = 311;
var stat2 = 300;

function getStats(pokemon){
  console.log("COMPARE starting...")
  // const pokemon = req.body.pokemon;
  let lowerPoke = validateForm(pokemon);
  console.log(lowerPoke)
  const data = P.apiCall(lowerPoke);
  let stats = data.stats;

  for (stat in stats){
    stat1 += stats[stat]['base_stat']
  }
  console.log(stat1)
  console.log("COMPARE ending...")
}

function comparePokemon(first, second){
    console.log(first)
    if (first && second){
        if (first > secondStats) {
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