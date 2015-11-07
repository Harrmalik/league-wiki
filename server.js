var express = require('express'),
    cons = require('consolidate'),
    request = require('request'),
    MongoClient = require('mongodb').MongoClient,
    routes = require('./routes/index');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use('/', routes);

MongoClient.connect('mongodb://localhost:27017/league');



app.listen(8080);
console.log("Express server started on port 8080");
