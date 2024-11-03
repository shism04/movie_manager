var express = require('express');
var router = express.Router();
var multer = require('multer');

const upload = multer({ dest: 'uploads/' });

var users = require('../data/dataProvider');
var reciver = require('../data/dataReciever');


router.get('/', function (req, res, next) {
  res.render('home', { head_title: 'home', user: req.session.user });
});

router.get('/contact', function (req, res, next) {
  res.render("contact", { head_title: "Contact" });
});

router.get('/my-collection', function (req, res, next) {
  if (req.session.login) {
    const films = users.getUserMovies(req.session.user.id);
    res.render("myMovies", { head_title: "My movies", films: films, userName:req.session.user.fullName });
  } else res.redirect('/signin');
});


router.get('/signin', function (req, res, next) {
  res.render("signIn", { head_title: "Sign In" });
});

router.get('/log-out', function (req, res, next) {
  req.session.login = false;
  req.session.user = {};
  res.redirect('/signin');
});

router.get('/signUp', function (req, res, next) {
  res.render("signUp", { head_title: "Sign Up" });
});

router.post('/signin', async function (req, res, next) {
  const registerd_user = await users.findUser(req.body.userEmail, req.body.pswd);
  if (registerd_user !== null) {
    req.session.login = true;
    req.session.user = registerd_user;
    res.redirect('/my-collection');
  } else {
    res.redirect('/signin');
  }
});

router.post('/signUp', function (req, res, next) {
  reciver.insertUser(req.body.fullName,req.body.userName, req.body.userEmail, req.body.pswd, async (err) => {
    if (err) {
      console.error("Error al registrar el usuario:", err);
      res.redirect('/signUp');
    } else {
      const newUser = await users.findUser(req.body.userEmail, req.body.pswd);
      req.session.login = true;
      req.session.user = newUser;
      res.redirect('/');
    }
  });
});

router.get('/contact', function (req, res, next) {
  res.render("contact", { head_title: "Contact" });
});

router.get('/new-movie', function (req, res, next) {
  res.render("new-movie", { head_title: "New Movie",userName:req.session.user.fullName });
});

router.post('/new-movie', upload.single('image'), function (req, res, next) {
  const copies = req.body.copies.map((copy,index) => ({
    id: index+1,
    condition: copy.condition,
    format: copy.format,
    dateAdd: copy.dateAdd,
  }));
  reciver.insertMovie(req.session.user.id,req.body.title,req.body.genre,req.body.releaseYr,req.body.director,req.file.path,req.body.description,copies, async (err) => {
    if (err) {
      console.error("Error al registrar la pelicula:", err);
      res.redirect('/new-movie');
    } else {
      res.redirect('/my-collection');
    }
  })
});

router.get('/movieDetails/:id', function (req, res, next) {
  const movie = users.findMovie(req.session.user.id, req.params.id);
  res.render("movieDetails", { head_title: movie.title, movie: movie,userName:req.session.user.fullName });
});

module.exports = router;
