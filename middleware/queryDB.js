const express = require('express');
const pokeBeltDB = require('../DB/pokebelt');
const newDBUser = require('../DB/user');
const router = express.Router();


exports.queryDB = async function () {
    console.log('querying')

    let userPokemon = [];

    const users = await newDBUser.find({})
    const pokes = await pokeBeltDB.find({})

    pokes.forEach(doc => userPokemon.push(doc.pokemon1))
    console.log(userPokemon)


    try {
        // console.log(users + ' users')
        console.log(pokes + ' pokes')
    } catch (error) {
        console.log(error)
      }
}