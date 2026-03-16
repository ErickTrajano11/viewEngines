var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pcs', { title: 'Computadores' });
});

router.get('/teclados', function(req, res, next) {
    res.render('teclados', { title: 'Teclados' });
});

router.get('/mouses', function(req, res, next) {
    res.render('mouses', { title: 'Mouses' });
});

module.exports = router;