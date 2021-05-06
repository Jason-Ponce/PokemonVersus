const express = require('express');
const pokeBeltDB = require('../DB/pokebelt');
const router = express.Router();
const userQuery = require('../middleware/queryDB.js');

let test = 'pikachu'

router 
    .route("/")
    .get((req, res) => {
        userQuery.queryDB();
        res.render('home')

    })
    
    .post(async (req, res) => {
        console.log('post running')
        const{pokemonOne} = req.body;
        console.log(req.body.pokemonOne)
        let pokeObj = {};
        pokeObj.pokemon1 = req.body.value;
        console.log(req.body, "req.body")

        let pokeModel = new pokeBeltDB(pokeObj);

        try {
            await pokeModel.save()
            res.json(pokeModel);
            console.log('working?')
        } catch(error) {
            console.log(error)
        }
    })
    
    module.exports = router