var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jogos', { title: 'Jogos' }); 
});

router.get('/metroidvania', function(req, res, next) {
    const jogosMetroidvania = [
        { id: 1, nome: 'Hollow Knight', desenvolvedor: 'Team Cherry' },
        { id: 2, nome: 'Ori and the Blind Forest', desenvolvedor: 'Moon Studios' },
        { id: 3, nome: 'Nine Sols', desenvolvedor: 'Red Candle Games' },
        { id: 4, nome: 'Blasphemous', desenvolvedor: 'The Game Kitchen' }
    ];
    
    res.render('metroidvania', { title: 'Jogos Metroidvania', jogos: jogosMetroidvania });
});

router.get('/rpg', function(req, res, next) {
    res.render('rpg', { title: 'Jogos RPG' });
});

module.exports = router;