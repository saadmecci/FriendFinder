//require the the friends array and other packages for server to run
var friends = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {
	//retrieve stored friend information
	app.get("/api/friends", function (request, response) {
		response.json(friends);
	});
	//user submits the friend survey to the server
	app.post("/api/friends", function (request, response) {
		//object that will be used to store friend values
		var bestFriend = {
	      name: "",
	      photo: "",
	      pointDifference: Infinity
	    };
		//parse the results of the survey taken by user
		var newFriendData = request.body;
		var scores = newFriendData.friendInfo;
		//variable to calculate diff between user score and all the scores stored in server
		var scoreDifference;
		//for loop to go through all the friends stored on the server
		for (var i = 0; i < friends.length; i++) {
			var currentFriend = friends[i];
			scoreDifference = 0;
			//for loop to go through all the scores from the questions in the survey
			for (var j = 0; j < currentFriend.friendInfo.length; j++) {
				var currentFriendScore = currentFriend.friendInfo[j];
				var currentUserScore = scores[j];
				//absolute value of the differences between the current user score and the friend user score that for loop is currently on
				scoreDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}
			//if the diff is less than the diff of the current best match
			if (scoreDifference <= bestFriend.pointDifference) {
				bestFriend.name = currentFriend.name;
				bestFriend.picture = currentFriend.picture;
				bestFriend.pointDifference = scoreDifference;
			}
		}
		//saves the user data to the database
		friends.push(newFriendData);
		//return the user's best friend in JSON format to use by the modal
		response.json(bestFriend);
	});
}