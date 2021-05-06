const express = require('express')
const app = express();
const connectDB = require('./DB/connection.js');

connectDB()
app.use(express.json());
app.use('/routes/userModel', require('./routes/signup'))

const port = process.env.PORT || 8000;
const io = require('socket.io');
//Listen to... 
//localhost:8000

const morgan = require('morgan');
app.use(morgan('dev'));

//serving static files
app.use(express.static(__dirname + '/public'));

//EJS template engine
app.set('view engine', 'ejs');

<<<<<<< HEAD
app.use (bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

=======
>>>>>>> 5a4d7adb42d2f4c19cd9f8559665ff534b52d587
app.use(express.urlencoded({
    extended: true
  }))



// ===================Routes=========================
const homeRoute = require('./routes/home.js')
const aboutRoute = require('./routes/about.js')
const searchRoute = require('./routes/search.js')
const compareRoute = require('./routes/compare.js')
const loginRoute = require('./routes/login.js')
const signupRoute = require('./routes/signup.js')
const movesRoute = require('./routes/moves.js')
const abilitiesRoute = require('./routes/abilities.js')
const arenaRoute = require('./routes/arena.js')

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/search', searchRoute);
app.use('/compare', compareRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/moves', movesRoute);
app.use('/abilities', abilitiesRoute);
app.use('/arena', arenaRoute);


//each route needs [var/let/const] [nameofRoute] = require('./routes/[js file name]')
//then app.use('/NameTheRoute', [nameofRoute])
// ===================================================


app.listen(port, () => {
    console.log(`Pokemon App Listening on port: ${port}`);
});