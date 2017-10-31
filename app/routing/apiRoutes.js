var friends = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {

	app.get("/api/friends", function (req, results) {
		results.JSON(friends);
	});

	app.post("/api/friends", function (req, results) {
		
		var newFriend = require.body;

		friends.push(newFriend);
		results.JSON(newFriend);
	});
}