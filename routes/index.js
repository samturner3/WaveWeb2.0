var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
  // res.send('Hello World!');
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
          req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', function(req, res) {
    res.redirect('/');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


// router.get('/dashboard', function(req, res, next) {
//   res.render('dashboard', { title: 'Express', text: 'Not post' });
//   // res.send('Hello World!');
// });



router.get('/dashboard', isAuthenticated, function(req, res) {
    res.render('dashboard', { title: 'Express', text: 'Not post', user: req.user });
  });

module.exports = router;
