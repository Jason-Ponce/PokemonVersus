const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
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
}); // end of userSchema


module.exports = newDBUser = mongoose.model('login',userSchema);

