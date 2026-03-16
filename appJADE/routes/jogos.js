var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jogos', { title: 'Jogos' }); 
});

router.get('/metroidvania', function(req, res, next) {
    res.render('metroidvania', { title: 'Jogos Metroidvania' });
});

router.get('/rpg', function(req, res, next) {
    res.render('rpg', { title: 'Jogos RPG' });
});

module.exports = router;