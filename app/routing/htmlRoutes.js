var path = require ("path");

module.exports = function(app) {

	app.get("/", function(req, results) {
	  results.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, results) {
	  results.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}