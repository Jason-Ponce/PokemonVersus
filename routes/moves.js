const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');

router
    .route("/")
    .post(async(req, res) => {
        const m = req.body.moves;
        let lowerMove = await validate.validateForm(m)
        let moves = await P.getMoves(lowerMove)

        let id = moves.id;
        let name = moves.name;
        let accuracy = moves.accuracy;
        let effect_chance = moves.effect_chance;
        let pp = moves.pp;
        let priority = moves.priority;
        let power = moves.power;
        let contest_combos = moves.contest_combos;
        let contest_type = moves.contest_type;
        let contest_effect = moves.contest_effect;
        let damage_class = moves.damage_class;
        let effect_entries = moves.effect_entries;
        let generation = moves.generation;
        let meta = moves.meta;
        let target = moves.target;
        let type = moves.type;
        let flavor_text_entries = moves.flavor_text_entries;

        res.render('moves', {
            id : id,
            name : name,
            accuracy : accuracy,
            effect_chance : effect_chance,
            pp : pp,
            priority : priority,
            power : power,
            contest_combos : contest_combos,
            contest_type : contest_type,
            contest_effect : contest_effect,
            damage_class : damage_class,
            effect_entries : effect_entries,
            generation : generation,
            meta : meta,
            target : target,
            type : type,
            flavor_text_entries : flavor_text_entries
        });
    })
    .get((req, res) => {
        res.render('moves');
    })
    




    module.exports = router;