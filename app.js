const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./DB/connection.js');
//Listen to... 
//localhost:8000

connectDB()
const Port = 8000;
app.use(express.json());
app.use('/routes/userModel', require('./routes/signup'))

//serving static files
app.use(express.static(__dirname + '/public'));

//EJS template engine
app.set('view engine', 'ejs');

app.use (bodyParser.urlencoded({extended: true}))

app.use(express.urlencoded({
    extended: true
  }))



// ===================Routes=========================
const homeRoute = require('./routes/home.js')
const testRoute = require('./routes/test.js')
const aboutRoute = require('./routes/about.js')
const searchRoute = require('./routes/search.js')
const compareRoute = require('./routes/compare.js')
const loginRoute = require('./routes/login.js')
const signupRoute = require('./routes/signup.js')

app.use('/', homeRoute);
app.use('/test', testRoute);
app.use('/about', aboutRoute);
app.use('/search', searchRoute);
app.use('/compare', compareRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);


//each route needs [var/let/const] [nameofRoute] = require('./routes/[js file name]')
//then app.use('/NameTheRoute', [nameofRoute])
// ===================================================

app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}!`)
});