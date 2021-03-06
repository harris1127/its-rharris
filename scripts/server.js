var express = require('express');
var app = express();
var server = require('http').createServer(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP ||
  process.env.OPENSHIFT_INTERNAL_IP;

var port = process.env.OPENSHIFT_NODEJS_PORT ||
  process.env.OPENSHIFT_INTERNAL_PORT || 8080;

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

app.get('/.well-known/acme-challenge/:challengeHash', function(req, res) {
    var hash = req.params.challengeHash+'.im3xdwOnE4siuDOLKh9D_aLGIuKulPmTzzJgkvhCO5E';
    res.send(hash);
});

// listen (start app with node server.js) ======================================
server.listen(port, ipaddress, function() {
    console.log('listening');
    console.log("App listening on port " + port);
});
