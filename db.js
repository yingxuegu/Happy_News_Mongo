var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://yingxuegu:guxueying234@104.236.199.200:27017/news';
// Use connect method to connect to the Server
MongoClient.connect(url, {
    db: {
      raw: true
    },
    server: {
      poolSize: 10
    }
  }, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});