//Routes Usage
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('about')
});


// you export the router variable to have access to the routes in the app.js file
module.exports = router;