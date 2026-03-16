var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Futebol', { title: 'Futebol' });
});

router.get('/times', function(req, res, next) {
  const times = [
    { nome: 'Flamengo', cidade: 'Rio de Janeiro' },
    { nome: 'Palmeiras', cidade: 'São Paulo' },
    { nome: 'Grêmio', cidade: 'Porto Alegre' },
    { nome: 'Atlético Mineiro', cidade: 'Belo Horizonte' }
  ];
  res.render('times', { title: 'Times de Futebol', times });
});

router.get('/jogadores', function(req, res, next) {
    const jogadores = [
        { nome: 'Neymar', time: 'Paris Saint-Germain' },
        { nome: 'Cristiano Ronaldo', time: 'Manchester United' },
        { nome: 'Lionel Messi', time: 'Paris Saint-Germain' },
        { nome: 'Kylian Mbappé', time: 'Paris Saint-Germain' }
    ];
    res.render('jogadores', { title: 'Jogadores de Futebol', jogadores });
});

module.exports = router;