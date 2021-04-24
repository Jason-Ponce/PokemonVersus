//const { builtinModules } = require('module');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var baseurl = 'https://pokeapi.co/api/v2/';

function apiReq(){
  let pokeURL = baseurl + pokemonInput;
  $.getJSON(pokeURL, function(data){
    console.log(data);
    console.log(JSON.stringify(data,null, " "));
  }
  )};


function getPokemon(name, res){
  console.log('function running')
  if (name){
    console.log(name + 'if statement')
    P.getPokemonByName(name, function(response, error) { // with callback
        if(!error) {
      //     console.log(JSON.stringify(response.abilities) + 'response.abilities')
      //     console.log(response.abilities + 'response.abilities')
      //     let abilities = response.abilities;
      //     for (a of abilities){
      //         console.log(a.ability.name)
      //     }
      //   } else {
      //     console.log(error);
      //     return console.log('jason sucks');
      //   }
      // });
        let abilities = response.abilities;
        let forms = response.forms;
        let gameIndices = response.game_indices;
        let heldItems = response.held_items;
        let moves = response.moves;
        let species = response.species;
        let sprites = response.sprites;
        let stats = response.stats;
        let types = response.types;
    } else {
        return ("pokemon error!!!!");
    }
  });
}else {
  return ('pokemon name not entered')
}}


// create two new routes - search results for pokemon, one for two pokemon

//send api data to right page (from api.js to search.js)

module.exports = {getPokemon}