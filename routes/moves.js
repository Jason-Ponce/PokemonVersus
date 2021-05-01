const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');

router
    .route("/")
    .post(async(req, res) => {
        const move = req.body.move;
        let lowerMove = await validate.validateForm(move)
        let pokeMove = await P.getMoves(lowerMove)
        console.log(move)
        console.log(lowerMove)
        console.log(pokeMove)
        res.render('moves');
    })
    .get((req, res) => {
        res.render('moves');
    })




    module.exports = router;