const express = require('express');

const UserController = require('../controller/userController'); 
const router = express.Router();

router.post('/cadastropf', UserController.cadastrarPF);

module.exports = router;