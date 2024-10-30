var express = require('express');
var router = express.Router();

var users = require('../data/dataProvider');


router.get('/', function(req, res, next) {
  if (req.session.login)  res.render('home', { head_title: 'home',user:req.session.user });
  else res.redirect('/signin');
});

router.get('/contact', function(req, res, next) {
  res.render("contact", {head_title: "Contact"});
});


router.get('/signin', function(req, res, next) {
  res.render("signIn", {head_title: "Sign In"});
});

router.get('/signUp', function(req, res, next) {
  res.render("signUp", {head_title: "Sign Up"});
});

router.post('/signin', function(req,res,next){  
    if (users.findUser(req.body.userEmail,req.body.pswd)) {
      req.session.login=true;
      req.session.user=user;
      res.redirect('/');
    } else {
      res.redirect('/signin');
    }
});


router.get('/contact', function(req, res, next) {
  res.render("contact", {head_title: "Contact"});
});


module.exports = router;
