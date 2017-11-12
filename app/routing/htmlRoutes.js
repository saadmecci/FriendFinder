//need this to get the file path for the html files
var path = require ("path");

module.exports = function(app) {
	//display the home page when users connect to website
	app.get("/", function(request, response) {
	  response.sendFile(path.join(__dirname, "../public/home.html"));
	});
	//display the questionaire when user wants to take the quiz
	app.get("/survey", function(request, response) {
	  response.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}