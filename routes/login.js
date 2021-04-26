const express = require('express');
const router = express.Router();
const path = require('path');

router
    .route("/signup")
    .get((req, res) => {
        res.sendFile(path.join(__dirname + '/../view/signup.html'));
    })
    .post((req, res) => {})

router
    .route("/login")
    .get((req, res) => {
        res.sendFile(path.join(__dirname + '/../view/login.html'));
    })
    .post((req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        res.send(`Username: ${username}<br>Password: ${password}`);
    })