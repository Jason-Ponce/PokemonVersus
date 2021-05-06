const express = require('express');
const route = express.Router();
const path = require('path');
const newDBUser = require('../DB/user');
const bodyParser = require('body-parser')



route 
    .route("/")
    .get((req, res) => {
        res.render('signup');
    })
    .post(async (req, res) => {
        console.log(req.body, "req.body")
        const{username,email,password: plainTextPassword} = req.body;
        let userObj = {};
        userObj.name = username;
        userObj.email = email;
        userObj.password = await bcrypt.hash(plainTextPassword, 10)
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
        
        
        console.log('new user created')
        module.exports = route
        

     // end of post

    // route.post('/', async (req,res)=>{
    //     const{name,email,password} = req.body;
    //     let user = {};
    //     user.name = name;
    //     user.email = email;
    //     user.password = password;
    //     let userModel = new User(user);
    //     await userModel.save();
    //     res.json(userModel);
    
