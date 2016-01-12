var express = require('express'),
    cons = require('consolidate'),
    request = require('request'),
    MongoClient = require('mongodb').MongoClient,
    routes = require('./routes/index'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
