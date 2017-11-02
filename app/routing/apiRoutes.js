var friends = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {

	app.get("/api/friends", function (request, response) {
		response.JSON(friends);
	});

	app.post("/api/friends", function (request, response) {
		
		var newFriend = require.body;

		friends.push(newFriend);
		response.JSON(newFriend);
	});
}