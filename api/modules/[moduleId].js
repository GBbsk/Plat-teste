import fs from 'fs';
import path from 'path';
import cors from 'cors';

// Caminho para o arquivo JSON
const dataFilePath = path.resolve(process.cwd(), 'src', 'data', 'ModuleData.json');

// Função para ler o arquivo de dados (igual ao anterior)
function readDataFile() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const rawData = fs.readFileSync(dataFilePath);
      return JSON.parse(rawData);
    }
    const alternativePath = path.resolve('/var/task', 'src', 'data', 'ModuleData.json');
    if (fs.existsSync(alternativePath)) {
      const rawData = fs.readFileSync(alternativePath);
      return JSON.parse(rawData);
    }
    throw new Error(`Data file not found at primary path: ${dataFilePath} or alternative path.`);
  } catch (error) {
    console.error("Error reading data file:", error);
    return { modules: [] };
  }
}

// Middleware CORS
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization', 'Username', 'Password'],
});

// Função auxiliar runMiddleware (igual ao anterior)
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

   if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Obter o ID do módulo da URL (parâmetro dinâmico)
  const { moduleId } = req.query;

  if (req.method === 'GET') {
    try {
      const data = readDataFile();
      // Encontra o módulo pelo ID (converte ID do JSON para string para comparação segura)
      const module = data.modules.find(m => m.id.toString() === moduleId);

      if (module) {
        res.status(200).json(module);
      } else {
        res.status(404).send('Module not found');
      }
    } catch (error) {
      res.status(500).send('Error reading server data');
    }
  } else {
    res.setHeader('Allow', ['GET', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}