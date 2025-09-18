const express = require("express");
const router = express.Router();
const PedidosController = require("../controller/pedidos.controller");


router.get("/pedidos", PedidosController.listar);
router.get("/pedidos/:id", PedidosController.buscar);
router.post("/pedidos", PedidosController.cadastrar);
router.put("/pedidos/:id", PedidosController.atualizar);
router.delete("/pedidos/:id", PedidosController.excluir);

module.exports = router;
