const express = require('express');
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.render('login')
    })
    .post((req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        res.send(`Username: ${username}<br>Password: ${password}`);
        res.render('login')

    })

module.exports = router;