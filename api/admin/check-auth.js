import cors from 'cors';
import fs from 'fs'; // Necessário se readDataFile estiver aqui ou for importado
import path from 'path'; // Necessário se readDataFile estiver aqui ou for importado

// --- INÍCIO: Lógica de Autenticação e Leitura de Dados ---
// Você pode mover isso para um arquivo utilitário e importar se preferir

const dataFilePath = path.resolve(process.cwd(), 'src', 'data', 'ModuleData.json');
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
        // Retorna um objeto com adminCredentials vazio em caso de erro
        return { adminCredentials: {} };
    }
}

// Função de autenticação básica (lê do JSON)
const authenticateAdmin = (username, password) => {
    try {
        const data = readDataFile();
        const adminCreds = data.adminCredentials;
        // Verifica se as credenciais existem e correspondem
        return adminCreds && username === adminCreds.username && password === adminCreds.password;
    } catch (error) {
        console.error("Authentication error:", error);
        return false; // Falha na autenticação se houver erro ao ler/processar
    }
};
// --- FIM: Lógica de Autenticação e Leitura de Dados ---


// Middleware CORS
const corsMiddleware = cors({
    origin: '*', // Ajuste para produção
    methods: ['GET', 'OPTIONS'], // Apenas GET e OPTIONS
    allowedHeaders: ['Content-Type', 'Authorization', 'Username', 'Password'], // Headers necessários para auth
});

// Função auxiliar runMiddleware
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

    if (req.method === 'GET') {
        // Extrai credenciais dos headers (ou de onde quer que venham)
        const username = req.headers['username'];
        const password = req.headers['password'];

        if (authenticateAdmin(username, password)) {
            res.status(200).json({ authenticated: true });
        } else {
            // Usa 401 Unauthorized para falha na autenticação
            res.status(401).json({ authenticated: false, message: 'Authentication failed' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'OPTIONS']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}