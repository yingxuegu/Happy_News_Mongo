var express = require('express');
var app = express();
var mongojs = require("mongojs");
var db = mongojs('news', ['news']);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/wholenews', function (req, res) {
	console.log("receive news request");
	db.news.find().sort({time: -1}, function(err, doc){
		console.log("whole news data comes from database");
		res.json(doc);
	});
});

app.get('/politics', function (req, res) {
	console.log("receive political news request");
	db.news.find({ 'topic.0': 'Politics' }).sort({time: -1}, function(err, doc){
		console.log("polictial news data comes from database");
		res.json(doc);
	});
});


app.post('/addnews', function(req, res) {
	console.log("show new news");
	console.log("body:" + req.body);
	db.news.insert(req.body, function(error, doc) {
		res.json(doc);
	});
});

app.delete('/removenews/:id', function(req, res) {
	var id = req.params.id;
	db.news.remove({_id: mongojs.ObjectId(id)}, function(error, doc){
		res.json(doc);
	});
});



app.get('/entertainment', function (req, res) {
	console.log("receive entertainment news request");
	db.news.find({ 'topic.0': 'Entertainment' }).sort({time: -1}, function(err, doc){
		console.log("entertainment news data comes from database");
		res.json(doc);
	});
});

app.get('/sports', function (req, res) {
	console.log("receive sports news request");
	db.news.find({ 'topic.0': 'Sports' }).sort({time: -1}, function(err, doc){
		console.log("sports news data comes from database");
		res.json(doc);
	});
});


app.get('/technology', function (req, res) {
	console.log("receive technology news request");
	db.news.find({ 'topic.0': 'Technology' }).sort({time: -1}, function(err, doc){
		console.log("Technology news data comes from database");
		res.json(doc);
	});
});

/*app.get('/home', function (req, res) {
	console.log("receive home news request");
	db.news.find(function(err, doc){
		console.log("Home news data comes from database");
		//res.json(doc);
	});
});*/



app.get('/news/:id', function(req, res) {
	var id = req.params.id;
	console.log("res get id " + id);
	db.news.findOne({id: parseInt(id, 10)}, function(error, doc){
		res.json(doc);
	});
});

app.get('/editnews/:id', function(req, res){
	var id = req.params.id;
	console.log("res get id " + id);
	db.news.findOne({_id: mongojs.ObjectId(id)}, function(error, doc) {
		res.json(doc);
	});
} );

app.put('/updatenews/:id', function(req, res) {
	var id = req.params.id;
	console.log("update news id: " + req.params.id);
	db.news.findAndModify(
		{
			query: {_id: mongojs.ObjectId(id)}, 
			update: {$set: {title: req.body.title, author: req.body.author, 
				content: req.body.content, time: req.body.time} },
			new: true
		}, function(error, doc){
			res.json(doc);
		}
	);
});




app.listen(3000);
console.log("server start");