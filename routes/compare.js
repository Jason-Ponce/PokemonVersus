const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');

router
    .route("/")
    .post(async (req, res) => {
      console.log(req.body.pokemonOne +'pokemon in get')
      const pokemon = req.body.pokemonOne;
      if (pokemon){
      await getStats(pokemon);
      comparePokemon(pokemon, stat2);
      } else {
        console.log('Cannot compare empty field')
        res.render('home')
      }
      res.render('compare');
    })
    .get((req, res) => {
      res.render('compare');
    })

var stat1 = 0;
var stat2 = 300;

function getStats(pokemon){
  console.log("getting stats...")
  // const pokemon = req.body.pokemonOne;
  let lowerPoke = validateForm(pokemon);
  console.log(lowerPoke)
  const data = P.apiCall(pokemon);
  let stats = data.stats;
  console.log(data)

  for (stat in stats){
    stat1 += stats[stat]['base_stat']
  }
  console.log(stat1 + 'stat1')
  console.log("getting stats ending...")
}

function comparePokemon(first, second){
  console.log('comparing...')
    console.log(first)
    if (first && second){
        if (first > second) {
            console.log('Pokemon 1 is the stronger Pokemon')
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