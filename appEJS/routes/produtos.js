var express = require('express');
var router = express.Router();

const produtos = [
  { id: 1, nome: 'PC 1', preco: 2199.99 },
  { id: 2, nome: 'PC 2', preco: 1999.99 },
  { id: 3, nome: 'PC 3', preco: 599.99 },
  { id: 4, nome: 'PC 4', preco: 1599.99 }
];

router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos', produtos: produtos });
});

module.exports = router;