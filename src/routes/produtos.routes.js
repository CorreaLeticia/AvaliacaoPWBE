const express = require("express");
const router = express.Router();
const ProdutosController = require("../controller/produtos.controller");


router.get("/produtos", ProdutosController.listar);
router.get("/produto/:codigo", ProdutosController.buscar);
router.post("/produto/", ProdutosController.cadastrar);
router.put("/produtos/:codigo", ProdutosController.atualizar);
router.delete("/produto/:codigo", ProdutosController.excluir);

module.exports = router;