const express = require('express');
const mongoose = require('mongoose');
const { userInfo } = require('os');
const User = require('../DB/user');
const route = express.Router();

route.post('/', async (req,res)=>{
    const{name,email,password} = req.body;
    let user = {};
    user.name = name;
    user.email = email;
    user.password = password;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);

}) // end of async function and post

module.exports = route;