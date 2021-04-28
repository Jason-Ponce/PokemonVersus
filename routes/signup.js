const express = require('express');
const router = express.Router();
const path = require('path');

router
    .route("/")
    .get((req, res) => {
        res.render('signup');
    })
    .post((req, res) => {
        res.render('signup');
    })

module.exports = router;