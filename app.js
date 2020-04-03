// require apps
const express = require('express');
const routes = require('./routes');

// variables to access active express instance
const app = express();

// set static folder and default path
app.use('/static', express.static('public'));
// set view engine for express to pug
app.set('view engine', 'pug');
// set file to handle page routing
app.use(routes);

// listen for activity on port 3000
app.listen(3000, () => console.log('Updates made, refresh/go to localhost:3000'));