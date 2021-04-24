//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');


router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname + '/../view/search.html'));
    res.render('/ejs route here????');
});

router.post('/', (req, res) => {
    const pokemon = req.body.pokemon
    let lowerPoke = validateForm(pokemon);
    P.getPokemon(lowerPoke, res);
    console.log(lowerPoke + ' pokemon lowercase')
    console.log(JSON.stringify(req.body) +' req.body');
    res.end()
  })

  function validateForm(input) {
    let lowerInput = input.toLowerCase();
    return (lowerInput);
  }

// you export the router variable to have access to the routes in the app.js file
module.exports = router;