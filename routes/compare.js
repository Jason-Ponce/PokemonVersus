const express = require('express');
const router = express.Router();
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');

router
    .route("/")
    .post(async(req, res) => {
      const pokemonInputOne = req.body.pokemonOne;
      const pokemonInputTwo = req.body.pokemonTwo;
      let pokeObj = {};
      let pokeCompare;
      if (pokemonInputOne && pokemonInputTwo){
        pokeObj = await getStats(pokemonInputOne, pokemonInputTwo);
        console.log("==========")
        console.log(pokeObj.p1.name)
        pokeCompare = await comparePokemon(pokeObj.p1.name, stat1, pokeObj.p2.name, stat2);
      } else if (pokemonInputOne == ''){
        pokeObj = await getStats(pokemonInputOne, pokemonInputTwo);
        pokeCompare = await comparePokemon(pokeObj.p1.name, stat1, pokeObj.p2.name, stat2);
      }

      res.render('compare', {poke : pokeObj, answer : pokeCompare});
    })
    .get((req, res) => {
      res.render('compare', {pokeOneObj : pOne, pokeTwoObj : pTwo});
    })

var stat1 = 0;
var stat2 = 0;
var randomPoke = Math.floor((Math.random() * 150) + 1);

async function getStats(pokemonOne, pokemonTwo){
  stat1 = 0;
  stat2 = 0;
  let returnApICall = {};

  //if first pokemon entry is empty
  if (pokemonOne == '') {
    console.log('input 1 null loop')
    console.log(pokemonTwo +' poke2')
    let lowerPokeTwo = validate.validateForm(pokemonTwo);
    console.log(randomPoke)

    let randomPokeData = await P.apiCall(randomPoke);
    console.log(randomPokeData.name + 'random data.name') 
    let dataTwo = await P.apiCall(lowerPokeTwo);

    let randomStats = randomPokeData.stats;
    let dataTwoStats = dataTwo.stats;

    for (stat in randomStats){
      stat1 += randomStats[stat]['base_stat']
    }
    console.log(stat1)

    for (stat in dataTwoStats){
      stat2 += dataTwoStats[stat]['base_stat']
      console.log(stat)
      console.log('random stat')

    }
    console.log(stat1 + ' stat1', stat2 + ' stat2')
    returnApICall.p1 = randomPokeData;
    returnApICall.p2 = dataTwo;
    return returnApICall

    //if pokemone two is empty
  } else if (pokemonTwo == '' && pokemonOne) {
    console.log('input 2 null loop')
    console.log(pokemonTwo)
    console.log(pokemonOne)

    let lowerPokeOne = validate.validateForm(pokemonOne);
    // let randomPoke = Math.floor((Math.random() * 150) + 1);

    let randomPokeData = await P.apiCall(randomPoke); 
    let dataOne = await P.apiCall(lowerPokeOne);

    let randomStats = randomPokeData.stats;
    let dataOneStats = dataOne.stats;

    for (stat in randomStats){
      stat1 += randomStats[stat]['base_stat']
    }
    console.log(stat1)

    for (stat in dataOneStats){
      stat2 += dataTwoStats[stat]['base_stat']
    }
    returnApICall.p1 = dataOne;
    returnApICall.p2 = randomPokeData;
    return returnApICall

    //if both pokemon entries were entered
  } else {
    console.log('no inputs null loop')

    let lowerPoke = validate.validateForm(pokemonOne);
    let lowerPokeTwo = validate.validateForm(pokemonTwo);
    console.log(lowerPoke)
    console.log(lowerPokeTwo)

    const data = await P.apiCall(lowerPoke);
    const dataTwo = await P.apiCall(lowerPokeTwo);

    let stats = data.stats;
    let statsTwo = dataTwo.stats;

    for (stat in stats){
      stat1 += stats[stat]['base_stat']
    }
    console.log(stat1)

    for (stat in statsTwo){
      stat2 += statsTwo[stat]['base_stat']
    }
    console.log(stat1 + ' stat1', stat2 + ' stat2')
    console.log("getting stats ending...")

    returnApICall.p1 = data;
    returnApICall.p2 = dataTwo;
    return returnApICall
  }
}

function comparePokemon(poke1, first, poke2, second){
  let answer = {};
  console.log(poke1)
  console.log(first)
  console.log(poke2)
  console.log(second)
  console.log('comparing...')
    console.log(first)
    console.log(second)
        if (first > second){ 
          console.log('Pokemon 1 is the stronger Pokemon')
          answer.first = poke1;
          answer.text = "is the stronger pokemon!";
          return answer
        } else if (second > first){
          console.log('Pokemon 2 is the stronger Pokemon');
          answer.name = poke2;
          answer.text = "is the stronger pokemon!";
          return answer
        } else{
          console.log('It\'s a tie')
          answer.first = poke1;
          answer.second = poke2;
          answer.text = "both have the same base stats! They are potentially equally matched.";
          return answer
        }
}

module.exports = router;