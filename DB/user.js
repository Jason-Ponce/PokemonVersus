const mongoose = require('mongoose');

const user = new mongoose.Schema({
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
        maxLength: 50,
    }
}))

module.exports = User = mongoose.model('user', user);

//exports = mongoose.model('user', UserSchema);