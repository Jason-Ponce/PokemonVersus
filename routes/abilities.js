const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');
const validate = require('../middleware/lookup.js');

router
    .route("/")
    .post(async(req, res) => {
      const ability = req.body.abilities;
      let lowerAbility = await validate.validateForm(ability)
      let abilities = await P.getAbilities(lowerAbility)

      console.log(req.body)

      let id = abilities.id;
      let name = abilities.name;
      let generation = abilities.generation;
      let names = abilities.names;
      let effect_entries = abilities.effect_entries;
      let effect_changes = abilities.effect_changes;
      let flavor_text_entries = abilities.flavor_text_entries;
      let pk = abilities.pokemon;

      console.log(pk[0].pokemon.name);

      res.render('abilities', {
        id : id,
        name : name,
        generation: generation,
        names : names,
        effect_entries : effect_entries,
        effect_changes : effect_changes,
        flavor_text_entries : flavor_text_entries,
        pk : pk
      });
    })
    .get((req, res) => {
      res.render('abilities');
    })


    module.exports = router;