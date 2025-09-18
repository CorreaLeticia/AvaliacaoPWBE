const express = require('express');
const app = express();
const clientesRoutes = require('./src/routes/clientes.routes');
const produtosRoutes = require('./src/routes/produtos.routes');
const pedidosRoutes = require('./src/routes/pedidos.routes');

app.use(express.json());


app.use(clientesRoutes);
app.use(produtosRoutes);
app.use(pedidosRoutes);

app.listen(3000, () => console.log('Servidor Online na porta 3000'));

