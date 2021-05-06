const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requirzed: true,
        minlezngth: 4,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxLength: 50,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxLength: 50
    }


    module.exports = newDBUser = mongoose.model('login',userSchema);