const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('./api.js');

// function lookup(pokemon){
//     let lowerPoke = validateForm(pokemon);
//     const data = P.apiCall(lowerPoke);
  
//     let abilities = data.abilities;
//     let forms = data.forms;
//     let gameIndices = data.game_indices;
//     let heldItems = data.held_items;
//     let moves = data.moves;
//     let species = data.species;
//     let sprites = data.sprites;
//     let stats = data.stats;
//     let types = data.types;
    
//     console.log(`Did you do a good job ${data.name.charAt(0).toUpperCase()+ data.name.slice(1)}?`)
//     return(data.name);
// }


function validateForm(input) {
  if (isNaN(input)) {
    let lowerInput = input.toLowerCase();
    return (lowerInput);
  }
}

module.exports = {validateForm}