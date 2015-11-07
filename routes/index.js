var express = require('express');
var router = express.Router();
var request = require('request');
var key = "47609a87-00f8-4777-8084-5bd3f0dbace3";

router.get('/', function(req, res){
  request('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=' + key, function (error, response, body) {
    body = JSON.parse(body);
    body = body.data;
    var body = Object.keys(body).map(function(k) { return body[k] });
    res.render('index', {'name': body});
  });
});

router.get('/test', function (req, res) {
  request('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=' + key, function (error, response, body) {
      // if (!error && response.statusCode == 200) {
      //     var obj = JSON.parse(body);
      //
      //     var stories = obj.data.children.map(function (story) { return story.data; });
      //
      //     db.collection('reddit').insert(stories, function (err, data) {
      //             if(err) throw err;
      //
      //             console.dir(data);
      //
      //             db.close();
      //     });
      // }
      body = JSON.parse(body);
      body = body.data;
      var body = Object.keys(body).map(function(k) { return body[k] });
      res.send(body);
  });
});

router.get('/aatrox', function (req, res) {
  request('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', function (error, response, body) {

      res.render('index', {img: body});
  });
});

router.get('*', function (req, res) {
  res.send('Page Not FOund')
});

module.exports = router;
