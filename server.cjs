const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
// const port = 3001; // Porta não é mais necessária aqui para Vercel

// Middleware CORS - Ainda pode ser útil se você tiver outras rotas não-API servidas aqui,
// mas para as rotas /api/*, o CORS é tratado nas funções serverless individuais.
// Se TODO o backend for via /api/*, você pode remover isso também.
app.use(cors({
    origin: '*', // Ajuste conforme necessário
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Username', 'Password']
}));

// Middleware para parsear JSON - Vercel geralmente faz isso automaticamente para funções API,
// então pode não ser estritamente necessário aqui se não houver rotas legadas.
app.use(express.json());

// const dataFilePath = path.join(__dirname, 'src', 'data', 'ModuleData.json'); // Caminho movido para as funções API

// Funções de leitura/escrita - Removidas daqui pois estão nas funções API
/*
const readDataFile = () => {
    // ... lógica removida ...
};

const writeDataFile = (data) => {
    // ... lógica removida ...
};
*/

// Função de autenticação - Removida daqui pois está na função API /api/admin/check-auth.js
/*
const authenticateAdmin = (username, password) => {
    // ... lógica removida ...
};
*/

// --- ROTAS API (REMOVIDAS OU COMENTADAS) ---
// As rotas GET agora são tratadas pelos arquivos em /api/
// As rotas POST, PUT, DELETE não funcionarão na Vercel com JSON, então são removidas.

/*
// GET /api/modules
app.get('/api/modules', (req, res) => { ... }); // Tratado por api/modules.js

// GET /api/modules/:moduleId
app.get('/api/modules/:moduleId', (req, res) => { ... }); // Tratado por api/modules/[moduleId].js

// GET /api/modules/:moduleId/lessons
app.get('/api/modules/:moduleId/lessons', (req, res) => { ... }); // Tratado por api/modules/[moduleId]/lessons.js

// GET /api/modules/:moduleId/lessons/:lessonId
app.get('/api/modules/:moduleId/lessons/:lessonId', (req, res) => { ... }); // Tratado por api/modules/[moduleId]/lessons/[lessonId].js

// GET /api/admin/check-auth
app.get('/api/admin/check-auth', (req, res) => { ... }); // Tratado por api/admin/check-auth.js

// POST /api/modules (REMOVIDO - escrita não funciona)
// app.post('/api/modules', (req, res) => { ... });

// PUT /api/modules/:moduleId (REMOVIDO - escrita não funciona)
// app.put('/api/modules/:moduleId', (req, res) => { ... });

// DELETE /api/modules/:moduleId (REMOVIDO - escrita não funciona)
// app.delete('/api/modules/:moduleId', (req, res) => { ... });

// POST /api/modules/:moduleId/lessons (REMOVIDO - escrita não funciona)
// app.post('/api/modules/:moduleId/lessons', (req, res) => { ... });

// PUT /api/modules/:moduleId/lessons/:lessonId (REMOVIDO - escrita não funciona)
// app.put('/api/modules/:moduleId/lessons/:lessonId', (req, res) => { ... });

// DELETE /api/modules/:moduleId/lessons/:lessonId (REMOVIDO - escrita não funciona)
// app.delete('/api/modules/:moduleId/lessons/:lessonId', (req, res) => { ... });

// PUT /api/admin/credentials (REMOVIDO - escrita não funciona)
// app.put('/api/admin/credentials', (req, res) => { ... });
*/

// --- REMOVER CHAMADA app.listen ---
/*
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
*/

// Você pode exportar o 'app' se precisar dele para algum teste local ou outra finalidade,
// mas a Vercel não o usará diretamente para as rotas /api.
// module.exports = app; // Opcional