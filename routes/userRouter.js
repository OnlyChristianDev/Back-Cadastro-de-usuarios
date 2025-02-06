const express = require('express');

const UserController = require('../controller/userController'); 
const router = express.Router();

router.post('/cadastropf', UserController.cadastrarPF);
router.post('/login', UserController.login);
router.post('/cadastropj', UserController.cadastrarPJ);
router.get('/listarpf', UserController.listarPessoasFisicas);
router.post('/listarpj', UserController.listarPessoasJuridicas);

module.exports = router;