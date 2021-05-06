const mongoose = require('mongoose');
const newDBUser = require('./user.js')
 
const pokebeltSchema = new mongoose.Schema({
    pokemon1: {
        type: String,
        parent: [{
            type: {type: mongoose.Types.ObjectId, ref: 'newDBUser'},
        }]
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