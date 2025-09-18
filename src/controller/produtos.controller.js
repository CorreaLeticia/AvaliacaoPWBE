const produtos = require('../data/produtos.data');

const listar = (req, res) => {
  res.send(produtos);
};

const buscar = (req, res) => {
  const { codigo } = req.params;
  const produto = produtos.find(p => p.codigo === codigo);
  if (!produto) return res.status(404).send('Produto não encontrado');
  res.send(produto);
};

const cadastrar = (req, res) => {
  const novo = req.body;
  produtos.push(novo);
  res.status(201).send('Produto cadastrado');
};

const atualizar = (req, res) => {
  const { codigo } = req.params;
  const dados = req.body;
  const index = produtos.findIndex(p => p.codigo === codigo);
  if (index === -1) return res.status(404).send('Produto não encontrado');
  produtos[index] = { ...produtos[index], ...dados };
  res.send('Produto atualizado');
};

const excluir = (req, res) => {
  const { codigo } = req.params;
  const index = produtos.findIndex(p => p.codigo === codigo);
  if (index === -1) return res.status(404).send('Produto não encontrado');
  produtos.splice(index, 1);
  res.send('Produto removido');
};

module.exports = { listar, buscar, cadastrar, atualizar, excluir };

