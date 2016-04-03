var express = require('express');
var app = express();
var mongojs = require("mongojs");
var db = mongojs('news', ['news']);

app.use(express.static(__dirname + "/public"));

app.get('/news', function (req, res) {
	console.log("receive news request");
	db.news.find(function(err, doc){
		console.log("data comes from database");
		res.json(doc);
	});
});

app.listen(3000);
console.log("server start");