import { Router } from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;
const router = Router();

router.post('/novo', async (req, res) => {
  const pedidoNovo = req.body;
  const data = JSON.parse(await readFile('pedidos.json'));
  const { nextId, pedidos } = data;

  pedidoNovo.id = nextId;
  pedidoNovo.timestamp = new Date().toISOString();
  pedidoNovo.entregue = false;

  data.nextId += 1;
  data.pedidos.push(pedidoNovo);

  writeFile('pedidos.json', JSON.stringify(data));

  res.send(pedidoNovo);
});

export default router;
