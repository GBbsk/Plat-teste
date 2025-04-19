import fs from 'fs';
import path from 'path';
import cors from 'cors';

// Caminho para o arquivo JSON
const dataFilePath = path.resolve(process.cwd(), 'src', 'data', 'ModuleData.json');

// Função para ler o arquivo de dados com tratamento de erro e caminhos alternativos
function readDataFile() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const rawData = fs.readFileSync(dataFilePath);
      return JSON.parse(rawData);
    }
    // Tenta caminho alternativo comum em serverless
    const alternativePath = path.resolve('/var/task', 'src', 'data', 'ModuleData.json');
    if (fs.existsSync(alternativePath)) {
      const rawData = fs.readFileSync(alternativePath);
      return JSON.parse(rawData);
    }
    throw new Error(`Data file not found at primary path: ${dataFilePath} or alternative path.`);
  } catch (error) {
    console.error("Error reading data file:", error);
    // Retorna uma estrutura vazia para evitar quebrar a aplicação
    return { modules: [] };
  }
}

// Middleware CORS (ajuste as opções conforme necessário para produção)
const corsMiddleware = cors({
  origin: '*', // Considere restringir isso em produção
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Username', 'Password'], // Mantenha os headers necessários
});

// Função auxiliar para executar middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Handler da Serverless Function
export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);

  // Trata requisição OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Trata requisição GET
  if (req.method === 'GET') {
    try {
      const data = readDataFile();
      res.status(200).json(data.modules || []);
    } catch (error) {
      // O erro já foi logado em readDataFile se ocorreu lá
      res.status(500).send('Error reading server data');
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['GET', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}