const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
  res.send(pedidos);
};

const buscar = (req, res) => {
  const { id } = req.params;
  const pedido = pedidos.find(p => p.id === id);
  if (!pedido) return res.status(404).send("Pedido não encontrado");
  res.send(pedido);
};


const cadastrar = (req, res) => {
  const novo = req.body;
  pedidos.push(novo);
  res.status(201).send("Pedido cadastrado");
};


const atualizar = (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  const index = pedidos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).send("Pedido não encontrado");
  pedidos[index] = { ...pedidos[index], ...dados };
  res.send("Pedido atualizado");
};


const excluir = (req, res) => {
  const { id } = req.params;
  const index = pedidos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).send("Pedido não encontrado");
  pedidos.splice(index, 1);
  res.send("Pedido removido");
};

module.exports = { listar, buscar, cadastrar, atualizar, excluir };