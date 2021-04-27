const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/../view/home.html'));
    res.render('home');
});

router.post('/', (req, res) => {
    console.log('running post home.js')
    const pokemon = req.body.pokemon
    P.getPokemon(pokemon, res);
    console.log(JSON.stringify(req.body) +' req.body from homejs');
    res.end()
  })


module.exports = router;