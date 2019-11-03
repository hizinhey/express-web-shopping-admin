var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET user page. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

/* GET user-detail-change page. */
router.get('/user-change', function(req, res, next) {
  res.render('user-change', { title: 'Express' });
});

/* GET bills page. */
router.get('/bills', function(req, res, next) {
  res.render('bills', { title: 'Express' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

/* GET income page. */
router.get('/income', function(req, res, next) {
  res.render('income', { title: 'Express' });
});

/* GET top page. */
router.get('/top-product', function(req, res, next) {
  res.render('top-product', { title: 'Express' });
});


module.exports = router;
