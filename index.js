import express, { json } from 'express';
import { promises as fs } from 'fs';
import pedidosRouter from './routes/pedidos.js';

const { readFile, writeFile } = fs;
const app = express();
const port = 3000;
// const data = JSON.parse(await readFile("pedidos.json"));

app.use(express.json());

app.use('/pedidos', pedidosRouter);

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, async () => {
  console.log('API started');
});
