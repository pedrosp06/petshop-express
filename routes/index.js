var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const cadastroController = require('../controllers/cadastroController')
const servicoController = require('../controllers/servicoController')

router.get('/hello',petsController.hello)
router.get('/pets' , petsController.index)
router.get('/home',indexController.home)
router.get('/cadastro',cadastroController.usuario)
router.get('/servicos',servicoController.serv)
router.get('/cadastroservicos', servicoController.cadserv)
router.post('/cadastro-servico',indexController.cadastro)

module.exports = router;
