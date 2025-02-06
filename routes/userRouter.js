const express = require('express');

const UserController = require('../controller/userController'); 
const router = express.Router();

router.post('/cadastropf', UserController.cadastrarPF);
router.post('/login', UserController.login);
router.post('/cadastropj', UserController.cadastrarPJ);
router.get('/listarpf', UserController.listarPessoasFisicas);
router.get('/listarpj', UserController.listarPessoasJuridicas);
router.delete('/deletar/:id', UserController.deletarUsuario);
module.exports = router;