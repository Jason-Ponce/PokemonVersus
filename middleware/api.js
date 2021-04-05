const { builtinModules } = require('module');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName(34, function(response, error) { // with callback
    if(!error) {
      console.log(response);
    } else {
      console.log(error);
    }
  });

  module.exports = P;