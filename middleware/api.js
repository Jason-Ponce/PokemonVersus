//const { builtinModules } = require('module');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var baseurl = 'https://pokeapi.co/api/v2/';

function apiCall(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getPokemonByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("pokemon name not entered" + name)
    }
  })
}

function getSpecies(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getPokemonSpeciesByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("pokemon name not entered")
    }
  })
}

function getMoves(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getMoveByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("pokemon move not found")
    }
  })
}

function getAbilities(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getAbilityByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("ability not found")
    }
    });
  }




module.exports = {apiCall, getSpecies, getMoves, getAbilities};

// create two new routes - search results for pokemon, one for two pokemon

//send api data to right page (from api.js to search.js)
