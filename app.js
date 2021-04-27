const express = require('express')
const app = express();
const port = 8000;
//Listen to... 
//localhost:8000

//serving static files
app.use(express.static(__dirname + '/public'));

//EJS template engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
  }))

app.use(express.json());

// ===================Routes=========================
const homeRoute = require('./routes/home.js')
const testRoute = require('./routes/test.js')
const aboutRoute = require('./routes/about.js')
const searchRoute = require('./routes/search.js')
const compareRoute = require('./routes/compare.js')
// const loginRoute = require('./routes/login.js')

app.use('/', homeRoute);
app.use('/test', testRoute);
app.use('/about', aboutRoute);
app.use('/search', searchRoute);
app.use('/compare', compareRoute);
//app.use('/login', loginRoute);


//each route needs [var/let/const] [nameofRoute] = require('./routes/[js file name]')
//then app.use('/NameTheRoute', [nameofRoute])
// ===================================================

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});