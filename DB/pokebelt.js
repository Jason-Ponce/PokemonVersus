const mongoose = require('mongoose');
 
const pokebeltSchema = new mongoose.Schema({
    user: {
        type: Number,
        // required: true
    },
    pokemon1: {
        type: String
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