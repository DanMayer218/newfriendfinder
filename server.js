// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Requires and sets the HTML routes in this file
// require('../routing/htmlroutes.js')(app);

// Requires and sets the API routes in this file
// require('../routing/apiroutes')(app);

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Requires and sets the HTML routes in this file
require('./routing/htmlroutes')(app);

// Requires and sets the API routes in this file
require('./routing/apiroutes')(app);
