var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.api-key;

router.get('/', function(req, res){
   res.render('index');
   console.log(key);
});

router.route('/champions')
   .get(function(req, res){
      request('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=' + key, function (error, response, body) {
        body = JSON.parse(body);
        body = body.data;
        var body = Object.keys(body).map(function(k) { return body[k] });
        body.sort(function(a,b){
         if (a.name < b.name)
             return -1;
         if (a.name > b.name)
             return 1;
         return 0;
        });
        res.render('champions', {'data': body});
    });
   });

router.route('/champions/:champID')
   .get(function(req, res){
      request('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + req.params.champID + '?champData=all&api_key=' + key, function (error, response, body) {
         console.log(req.params.champID);
        body = JSON.parse(body);
        res.render('champ', {'data': body});
      });
   });

router.get('/test', function (req, res) {
  request('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=' + key, function (error, response, body) {
      body = JSON.parse(body);
      body = body.data;
      var body = Object.keys(body).map(function(k) { return body[k] });
      res.send(JSON.parse(body));
  });
});

router.get('*', function (req, res) {
  res.send('Page Not Found')
});

module.exports = router;
