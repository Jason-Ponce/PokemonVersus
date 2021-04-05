const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('./middleware/api.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../view/home.html'));
});

router.post('/', (req, res) => {
    const pokemon = req.body.pokemontwo

    console.log(pokemon);
    console.log(req.body);
    res.end()
  })

module.exports = router;