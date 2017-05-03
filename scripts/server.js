// set up ======================================================================
var express = require('express');
var app = express();                        // create our app w/ express

var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var IPADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var morgan = require('morgan');
var bodyParser = require('body-parser');

// configuration ===============================================================

app.use(express.static('./app'));        // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json


// application -------------------------------------------------------------
app.get('*', function (req, res) {
        res.sendFile(__dirname + '/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// listen (start app with node server.js) ======================================
app.listen(PORT);
console.log("App listening on port " + PORT);