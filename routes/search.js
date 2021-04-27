//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');
//const L = require('../middleware/lookup.js');


router.get('/', (req, res) => {
  console.log(`====== HTTP Method Used: ${req.type} ======`)
  res.render('search');
});

router.post('/', async (req, res) => {
  console.log(`====== HTTP Method Used: ${req.method} ======`)
  console.log("/search POST starting...")
  const pokemonOne = req.body.pokemonOne
  // const pokemonTwo = req.body.pokemonTwo
  // const navbarPokemon = req.body.navbarPokemon
  console.log(req.body)
  let lowerPoke = validateForm(pokemonOne);
  const data = await P.apiCall(lowerPoke);

  let abilities = data.abilities;
  let baseExp = data.base_experience;
  let flavorText = "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms."
  let forms = data.forms;
  let gameIndices = data.game_indices;
  let height = data.height;
  let heldItems = data.held_items;
  let id = data.id;
  let moves = data.moves;
  let name = data.name;
  let species = data.species;
  let sprites = data.sprites;
  let stats = data.stats;
  let types = data.types;
  let weight = data.weight;
  
  console.log(`Did you do a good job ${data.name.charAt(0).toUpperCase()+ data.name.slice(1)}?`)

  for (stat in abilities){
    console.log(abilities[stat]['ability']['name'])
  }
  console.log("If pokemon name is shown before POST ending, it works!")
  console.log("/search POST ending...")
  res.render('search', {
    abilities : abilities,
    baseExp : baseExp,
    flavorText : flavorText,
    forms : forms,
    gameIndices : gameIndices,
    height : height ,
    heldItems : heldItems,
    id : id,
    moves : moves,
    name : name,
    species : species,
    sprites : sprites,
    stats : stats,
    types : types,
    weight : weight
  });
})

function validateForm(input) {
  let lowerInput = input.toLowerCase();
  return (lowerInput);
}



// you export the router variable to have access to the routes in the app.js file
module.exports = router;