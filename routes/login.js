const express = require('express');
const route = express.Router();
const path = require('path');
const newDBUser = require('../DB/user');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const JWT_SECRET = 'mnusv78sove7s45shiurseusio7494hkjkcds7'

route
    .route("/")
    .get((req, res) => {
        res.render('login')
    })
    .post(async (req, res) => {
        console.log('hey')
        res.json({ status: 'ok'})
        const {name, password} = req.body
        console.log(name)
        const user = await newDBUser.find({ name : 'abcdefg' })
        console.log(req.body, 'req.body')
        //const user = await newDBUser.find({ name })
        console.log(user)

        if (!user) {
            console.log("heyyyyyyyyyyyyyyyyyyyy")
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }
    
        if (await bcrypt.compare(password, user.password)) {
            console.log(user.password)
            console.log(password)
            // the username, password combination is successful
    
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                JWT_SECRET
            )
            console.log('success')
            return res.json({ status: 'ok', data: token })
            
        }
    
        res.json({ status: 'error', error: 'Invalid username/password' })
    })
    
   

    

module.exports = route;