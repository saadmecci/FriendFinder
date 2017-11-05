var friends = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {

	app.get("/api/friends", function (request, response) {
		response.json(friends);
	});

	app.post("/api/friends", function (request, response) {
		
		var newFriendData = require.body;

		friends.push(newFriendData);
		response.json(newFriendData);
	});
}