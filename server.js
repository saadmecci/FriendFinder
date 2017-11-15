var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//create express server
var app = express();
//server will listen on port 3000
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//requires the routing files for that the app will be using
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//starts the server
app.listen(PORT, function() {
	console.log("App is listening on port: " + PORT);
});