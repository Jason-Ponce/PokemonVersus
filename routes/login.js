const express = require('express');
const router = express.Router();
const path = require('path');
const newDBUser = require('../DB/user');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')



const JWT_SECRET = 'mnusv78sove7s45shiurseusio7494hkjkcds7'

router
    .route("/")
    .get((req, res) => {
        res.render('login')
    })
    .post(async (req, res) => {
        console.log('Testing...')
        const { username, password } = req.body
        console.log(req.body, 'req.body')
        console.log(username, 'username')
        const login = await newDBUser.findOne({ name: username }).lean()
       

        if (!login) {
            console.log("User not found")
            return res.json({ status: 'error', error: 'Invalid username/password' })
        } // end of first if
    
        if ( login.password == password) {
            console.log(login.password)
            console.log(password)
            // the username, password combination is successful
    
            console.log('success')
            
            //x = res.json({ status: 'ok'})
            res.redirect('/');
           
            
            
        } // end of second if

        else 
    
        res.json({ status: 'error', error: 'Invalid username/password' })
    }) // end of post
    
   

    

module.exports = router;