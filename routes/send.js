var express = require('express');
var router = express.Router();

var pushBull = require('../modules/pushBull');

/* Handle POST request from form */
router.post('/', function(req, res) {
  // res.send('Got a POST request');

  // console.log(req.body.title);

  pushBull.sendNote(req.body.title, req.body.body, function (error, response) {
    if(error) {
      console.log('Unknown Error');
      return;
    }
      console.log(response);
      res.render('send', { title: 'Express', text: 'Got a POST request!', results: response });
  });

  // res.send('Hello World!');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', text: 'Not post' });
  // res.send('Hello World!');
});

module.exports = router;
