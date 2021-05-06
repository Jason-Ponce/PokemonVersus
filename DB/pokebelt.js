const mongoose = require('mongoose');
const dbUser = require('./user.js')
 
const pokebeltSchema = new mongoose.Schema({
    user: {
        type: Number,
        // required: true
    },
    pokemon1: {
        type: String,
        user: {type: mongoose.Types.ObjectId, ref: 'dbUser'}
    },
    pokemon2: {
        type: String
    },
    pokemon3: {
        type: String
    },
    pokemon4: {
        type: String
    },
    pokemon5: {
        type: String
    },
    pokemon6: {
        type: String
    }
})

module.exports = pokeBeltDB = mongoose.model('pokebelt', pokebeltSchema);