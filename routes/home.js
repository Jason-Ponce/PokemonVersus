const express = require('express');
const router = express.Router();
const P = require('../middleware/api.js');
const connectDB = require('../DB/connection.js');

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/../view/home.html'));
    res.render('home');
});

router.post('/', (req, res) => {
    const pokemon = req.body.pokemon
    P.getPokemon(pokemon, res);
    res.end()
  })


module.exports = router;