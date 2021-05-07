const mongoose = require('mongoose');

const MONGOURI = 'mongodb+srv://Alex:Projectpassword1@pokecluster.xy7rg.mongodb.net/pokemon_database';

const connectDB = async () => {
    await mongoose.connect(MONGOURI, {
        useUnifiedTopology: true, 
        useNewUrlParser: true

}); // end of mongoose.connect function

console.log('DB connected!!!');

}; // end of connectDB async function

module.exports = connectDB;

