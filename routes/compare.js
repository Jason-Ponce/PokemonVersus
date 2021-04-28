const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');

router
    .route("/")
    .post((req, res) => {
      console.log(req.body.pokemonOne +'pokemon in get')
      const pokemonInputOne = req.body.pokemonOne;
      const pokemonInputTwo = req.body.pokemonTwo;
      if (pokemonInputOne && pokemonInputTwo){
        getStats(pokemon);
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
var stat2 = 0;

async function getStats(pokemonOne, pokemonTwo){
  console.log("getting stats...")
  if (pokemonOne == null) {
    let lowerPokeTwo = validateForm(pokemonTwo);
    let randomPoke = Math.floor((Math.random() * 150) + 1);

    let randomPokeData = await P.apiCall(randomPoke); 
    let dataTwo = await P.apiCall(lowerPokeTwo);

    let randomStats = randomPokeData.stats;
    let dataTwoStats = dataTwo.statsStats;

    for (stat in randomStats){
      stat1 += randomStats[stat]['base_stat']
    }
    for (stat in dataTwoStats){
      stat2 += dataTwoStats[stat]['base_stat']
    }
  } else if (pokemonTwo == null) {
    let lowerPokeOne = validateForm(pokemonOne);
    let randomPoke = Math.floor((Math.random() * 150) + 1);

    let randomPokeData = await P.apiCall(randomPoke); 
    let dataOne = await P.apiCall(lowerPokeOne);

    let randomStats = randomPokeData.stats;
    let dataOneStats = dataOne.statsStats;

    for (stat in randomStats){
      stat1 += randomStats[stat]['base_stat']
    }
    for (stat in dataOneStats){
      stat2 += dataTwoStats[stat]['base_stat']
    }
  } else {
    let lowerPoke = validateForm(pokemonOne);
    let lowerPokeTwo = validateForm(pokemonTwo);
    console.log(lowerPoke + lowerPokeTwo)

    const data = await P.apiCall(lowerPoke);
    const dataTwo = await P.apiCall(lowerPokeTwo);

    let stats = data.stats;
    let statsTwo = dataTwo.stats;

    for (stat in stats){
      stat1 += stats[stat]['base_stat']
    }
    for (stat in statsTwo){
      stat2 += statsTwo[stat]['base_stat']
    }
    console.log(stat1 + ' stat1', stat2 + ' stat2')
    console.log("getting stats ending...")
  }
}

  // else {

  //     let lowerPoke = validateForm(pokemonOne);
  //     let lowerPokeTwo = validateForm(pokemonTwo);
  //     console.log(lowerPoke + lowerPokeTwo)
  
  //     const data = await P.apiCall(lowerPoke);
  //     const dataTwo = await P.apiCall(lowerPokeTwo);
  
  //     let stats = data.stats;
  //     let statsTwo = dataTwo.stats;
  
  //     for (stat in stats){
  //       stat1 += stats[stat]['base_stat']
  //     }
  // }


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