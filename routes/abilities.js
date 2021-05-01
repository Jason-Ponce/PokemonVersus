const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('../middleware/api.js');

router
    .route("/")
    .post(async(req, res) => {
      res.render('compare');
    })
    .get((req, res) => {
      res.render('compare');
    })


    module.exports = router;