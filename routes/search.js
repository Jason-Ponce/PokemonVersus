//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');


router.get('/', (req, res) => {
  res.render('search');
});

router.post('/', async (req, res) => {
  let lowerPoke, lowerPokeSpecies;
  const pokemonOne = req.body.pokemonOne
  const pokemonTwo = req.body.pokemonTwo
  const navbarPokemon = req.body.navbarPokemon
  if (pokemonOne){
    lowerPoke = validate.validateForm(pokemonOne);
    lowerPokeSpecies = validate.validateForm(pokemonOne);
  }
  if (pokemonTwo) {
    lowerPoke = validate.validateForm(pokemonTwo);
    lowerPokeSpecies = validate.validateForm(pokemonTwo);
  }
  if (navbarPokemon){
    lowerPoke = validate.validateForm(navbarPokemon);
    lowerPokeSpecies = validate.validateForm(navbarPokemon);
  }
  const data = await P.apiCall(lowerPoke);
  const speciesData = await P.getSpecies(lowerPokeSpecies);

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
  let sprites = data.sprites;
  let stats = data.stats;
  let types = data.types;
  let weight = data.weight;

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
    sprites : sprites,
    species : speciesData,
    stats : stats,
    types : types,
    weight : weight
  });
})



// you export the router variable to have access to the routes in the app.js file
module.exports = router;