var express = require('express');
var router = express.Router();
const JSON2 = require('circular-json');


router.get('/', function (req, res) {

  // Requires official Node.js MongoDB Driver 3.0.0+
  var mongodb = require("mongodb");
  var ObjectID = mongodb.ObjectID;

  var client = mongodb.MongoClient;
  var url = "mongodb://localhost:27017/";

  client.connect(url, function (err, client) {

    var db = client.db("masechtot");
    var collection = db.collection("projects");

    var query = {};

    var cursor = collection.find(query);

    var users = [];
    var counter = 0;
    cursor.forEach(function (u) {
      users.push(u);
      console.log(u);
      counter++;
      if (counter === 2) {
        console.log(users);
        const json = JSON2.stringify(users);
        res.json(json);
      }
    });
  });
})

module.exports = router;
