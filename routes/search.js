//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');
//const L = require('../middleware/lookup.js');


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../view/home.html'));
    // res.render('/ejs route here????');

});

router.post('/', async (req, res) => {
  console.log("/search POST starting...")
  const pokemon = req.body.pokemon
  let lowerPoke = validateForm(pokemon);
  const data = await P.apiCall(lowerPoke);

  let abilities = data.abilities;
  let forms = data.forms;
  let gameIndices = data.game_indices;
  let heldItems = data.held_items;
  let moves = data.moves;
  let species = data.species;
  let sprites = data.sprites;
  let stats = data.stats;
  let types = data.types;
  
  console.log(`Did you do a good job ${data.name.charAt(0).toUpperCase()+ data.name.slice(1)}?`)
  // console.log(JSON.stringify(data.abilities.ability));
  console.log(stats)
  res.sendFile(path.join(__dirname + '/../view/search.html'));
  console.log("If pokemon name is shown before POST ending, it works!")
  console.log("/search POST ending...")
})

function validateForm(input) {
  let lowerInput = input.toLowerCase();
  return (lowerInput);
}



// you export the router variable to have access to the routes in the app.js file
module.exports = router;