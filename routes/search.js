//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../view/home.html'));
    // res.render('/ejs route here????');

});

router.post('/', (req, res) => {
  console.log('u workin or not?')
  const pokemon = req.body.pokemon
  let lowerPoke = validateForm(pokemon);
  let response = P.getPokemon(lowerPoke, res);
  console.log(JSON.stringify(response))
  let abilities = response.abilities;
  let forms = response.forms;
  let gameIndices = response.game_indices;
  let heldItems = response.held_items;
  let moves = response.moves;
  let species = response.species;
  let sprites = response.sprites;
  let stats = response.stats;
  let types = response.types;

  console.log(lowerPoke + ' pokemon lowercase')
  console.log(JSON.stringify(req.body) +' req.body from search.js');
  res.sendFile(path.join(__dirname + '/../view/search.html'));
})

function validateForm(input) {
  let lowerInput = input.toLowerCase();
  return (lowerInput);
}



// you export the router variable to have access to the routes in the app.js file
module.exports = router;