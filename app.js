const express = require('express')
const app = express();
const port = 8000;
//Listen to... 
//localhost:8000

//serving static files
app.use(express.static(__dirname + '/public'));

// ===================Routes=========================
const homeRoute = require('./routes/home.js')
const testRoute = require('./routes/test.js')
app.use('/', homeRoute);
app.use('/test', testRoute);

//each route needs [var/let/const] [nameofRoute] = require('./routes/[js file name]')
//then app.use('/NameTheRoute', [nameofRoute])
// ===================================================

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});