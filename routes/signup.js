const express = require('express');
const newDBUser = require('../DB/user');
const bodyParser = require('body-parser')
const router = express.Router();




router 
    .router("/")
    .get((req, res) => {
        res.render('signup');
    })
    .post(async (req, res) => {
        console.log(req.body, "req.body")
        const{username,email,password} = req.body;
        let userObj = {};
        userObj.name = username;
        userObj.email = email;
        userObj.password = password;
        let userModel = new newDBUser(userObj);
        console.log(userModel, "user model")
        try { 
            await userModel.save();
            res.json(userModel);
        } // end of try

        catch(error) {
            console.log(error)
        }
            
        })
        
module.exports = router
        