const express = require('express');
const router = express.Router();
const ClientesController = require("../controller/clientes.controller");

router.get('/clientes', ClientesController.listar);
router.get('/clientes/:cpf', ClientesController.buscar);
router.post('/clientes', ClientesController.cadastrar);
router.put('/clientes/:cpf', ClientesController.atualizar);
router.delete('/clientes/:cpf', ClientesController.excluir);

module.exports = router;
