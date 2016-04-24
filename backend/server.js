var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var bson          = require('bson');

var db = require('./config/db');

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public/views')); 
require('./app/routes')(app);
exports = module.exports = app; 
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
//app.use(express.static(__dirname + '/public')); 


//var port = process.env.PORT || 3000; 
/*app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
//app.listen(8080);               

// shoutout to the user                     
//console.log('Magic happens on port ' );

// expose app           
exports = module.exports = app; 
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
//app.listen(8080);               

// shoutout to the user                     
//console.log('Magic happens on port ' );

// expose app           
exports = module.exports = app; 

var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");*/

var http = require('http'),
fs = require('fs');

fs.readFile('./public/views/index.html', function (err, html) {
if (err) {
throw err; 
} 
http.createServer(function(request, response) { 
response.writeHeader(200, {"Content-Type": "text/html"}); 
response.write(html); 
response.end(); 
}).listen(8080);
});