var http = require('http');
var express=require('express');
var mongoose=require('mongoose');
var path=require('path');
var app=express();
var server = http.createServer(function(req, res) {
  res.writeHead(200);
/*  res.end('Hello Http');*/
  var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://ds013891.mlab.com:13891/candidate-test", function(err, db) {
  if(err) { return console.dir(err); }
  else console.log("connected");
  var collection = db.collection('test');
  console.log(collection);
});
});
server.listen(8080);
