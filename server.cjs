const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to the data file
const dataFilePath = path.join(__dirname, 'src', 'data', 'ModuleData.json');

// Read data file
const readDataFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    return { modules: [], admin: { username: 'admin', password: 'admin123' } };
  }
};

// Write data file
const writeDataFile = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing data file:', error);
    return false;
  }
};

// Authentication middleware
const authenticate = (req, res, next) => {
  const { username, password } = req.headers;
  const data = readDataFile();
  
  if (username === data.admin.username && password === data.admin.password) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// API Routes

// Get all modules
app.get('/api/modules', (req, res) => {
  console.log('Endpoint /api/modules atingido');
  const data = readDataFile();
  console.log('Dados retornados:', data.modules);
  res.json(data.modules);
});

// Get a specific module
app.get('/api/modules/:id', (req, res) => {
  const data = readDataFile();
  const module = data.modules.find(m => m.id === parseInt(req.params.id));
  
  if (module) {
    res.json(module);
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Add a new module (requires authentication)
app.post('/api/modules', authenticate, (req, res) => {
  const data = readDataFile();
  const newModule = req.body;
  
  // Generate a new ID
  const maxId = data.modules.reduce((max, module) => Math.max(max, module.id), 0);
  newModule.id = maxId + 1;
  
  data.modules.push(newModule);
  
  if (writeDataFile(data)) {
    res.status(201).json(newModule);
  } else {
    res.status(500).json({ error: 'Failed to save module' });
  }
});

// Update a module (requires authentication)
app.put('/api/modules/:id', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.id);
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const updatedModule = { ...req.body, id: moduleId };
    data.modules[moduleIndex] = updatedModule;
    
    if (writeDataFile(data)) {
      res.json(updatedModule);
    } else {
      res.status(500).json({ error: 'Failed to update module' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Delete a module (requires authentication)
app.delete('/api/modules/:id', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.id);
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    data.modules.splice(moduleIndex, 1);
    
    if (writeDataFile(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to delete module' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Lesson routes

// Add a lesson to a module (requires authentication)
app.post('/api/modules/:moduleId/lessons', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.moduleId);
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const newLesson = req.body;
    
    // Generate a new ID
    const allLessons = data.modules.flatMap(m => m.lessons || []);
    const maxId = allLessons.reduce((max, lesson) => Math.max(max, lesson.id), 0);
    newLesson.id = maxId + 1;
    
    // Ensure lessons array exists
    if (!data.modules[moduleIndex].lessons) {
      data.modules[moduleIndex].lessons = [];
    }
    
    data.modules[moduleIndex].lessons.push(newLesson);
    
    if (writeDataFile(data)) {
      res.status(201).json(newLesson);
    } else {
      res.status(500).json({ error: 'Failed to save lesson' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Update a lesson (requires authentication)
app.put('/api/modules/:moduleId/lessons/:lessonId', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.moduleId);
  const lessonId = parseInt(req.params.lessonId);
  
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const lessonIndex = data.modules[moduleIndex].lessons.findIndex(l => l.id === lessonId);
    
    if (lessonIndex !== -1) {
      const updatedLesson = { ...req.body, id: lessonId };
      data.modules[moduleIndex].lessons[lessonIndex] = updatedLesson;
      
      if (writeDataFile(data)) {
        res.json(updatedLesson);
      } else {
        res.status(500).json({ error: 'Failed to update lesson' });
      }
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Delete a lesson (requires authentication)
app.delete('/api/modules/:moduleId/lessons/:lessonId', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.moduleId);
  const lessonId = parseInt(req.params.lessonId);
  
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const lessonIndex = data.modules[moduleIndex].lessons.findIndex(l => l.id === lessonId);
    
    if (lessonIndex !== -1) {
      data.modules[moduleIndex].lessons.splice(lessonIndex, 1);
      
      if (writeDataFile(data)) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: 'Failed to delete lesson' });
      }
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Resource routes (files and audios)

// Add a file to a lesson (requires authentication)
app.post('/api/modules/:moduleId/lessons/:lessonId/files', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.moduleId);
  const lessonId = parseInt(req.params.lessonId);
  
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const lessonIndex = data.modules[moduleIndex].lessons.findIndex(l => l.id === lessonId);
    
    if (lessonIndex !== -1) {
      const newFile = req.body;
      
      // Generate a new ID
      const allFiles = data.modules.flatMap(m => 
        m.lessons?.flatMap(l => l.files || []) || []
      );
      const maxId = allFiles.length > 0 ? 
        allFiles.reduce((max, file) => Math.max(max, file.id || 0), 1000) : 1000;
      newFile.id = maxId + 1;
      
      // Ensure files array exists
      if (!data.modules[moduleIndex].lessons[lessonIndex].files) {
        data.modules[moduleIndex].lessons[lessonIndex].files = [];
      }
      
      data.modules[moduleIndex].lessons[lessonIndex].files.push(newFile);
      
      if (writeDataFile(data)) {
        res.status(201).json(newFile);
      } else {
        res.status(500).json({ error: 'Failed to save file' });
      }
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Add an audio to a lesson (requires authentication)
app.post('/api/modules/:moduleId/lessons/:lessonId/audios', authenticate, (req, res) => {
  const data = readDataFile();
  const moduleId = parseInt(req.params.moduleId);
  const lessonId = parseInt(req.params.lessonId);
  
  const moduleIndex = data.modules.findIndex(m => m.id === moduleId);
  
  if (moduleIndex !== -1) {
    const lessonIndex = data.modules[moduleIndex].lessons.findIndex(l => l.id === lessonId);
    
    if (lessonIndex !== -1) {
      const newAudio = req.body;
      
      // Generate a new ID
      const allAudios = data.modules.flatMap(m => 
        m.lessons?.flatMap(l => l.audios || []) || []
      );
      const maxId = allAudios.length > 0 ?
        allAudios.reduce((max, audio) => Math.max(max, audio.id || 0), 2000) : 2000;
      newAudio.id = maxId + 1;
      
      // Ensure audios array exists
      if (!data.modules[moduleIndex].lessons[lessonIndex].audios) {
        data.modules[moduleIndex].lessons[lessonIndex].audios = [];
      }
      
      data.modules[moduleIndex].lessons[lessonIndex].audios.push(newAudio);
      
      if (writeDataFile(data)) {
        res.status(201).json(newAudio);
      } else {
        res.status(500).json({ error: 'Failed to save audio' });
      }
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// Update a file (requires authentication)
app.put('/api/files/:fileId', authenticate, (req, res) => {
  const data = readDataFile();
  const fileId = parseInt(req.params.fileId);
  
  let fileFound = false;
  
  for (const module of data.modules) {
    for (const lesson of (module.lessons || [])) {
      if (lesson.files) {
        const fileIndex = lesson.files.findIndex(f => f.id === fileId);
        if (fileIndex !== -1) {
          const updatedFile = { ...req.body, id: fileId };
          lesson.files[fileIndex] = updatedFile;
          fileFound = true;
          break;
        }
      }
    }
    if (fileFound) break;
  }
  
  if (fileFound) {
    if (writeDataFile(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to update file' });
    }
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// Update an audio (requires authentication)
app.put('/api/audios/:audioId', authenticate, (req, res) => {
  const data = readDataFile();
  const audioId = parseInt(req.params.audioId);
  
  let audioFound = false;
  
  for (const module of data.modules) {
    for (const lesson of (module.lessons || [])) {
      if (lesson.audios) {
        const audioIndex = lesson.audios.findIndex(a => a.id === audioId);
        if (audioIndex !== -1) {
          const updatedAudio = { ...req.body, id: audioId };
          lesson.audios[audioIndex] = updatedAudio;
          audioFound = true;
          break;
        }
      }
    }
    if (audioFound) break;
  }
  
  if (audioFound) {
    if (writeDataFile(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to update audio' });
    }
  } else {
    res.status(404).json({ error: 'Audio not found' });
  }
});

// Delete a file (requires authentication)
app.delete('/api/files/:fileId', authenticate, (req, res) => {
  const data = readDataFile();
  const fileId = parseInt(req.params.fileId);
  
  let fileFound = false;
  
  for (const module of data.modules) {
    for (const lesson of (module.lessons || [])) {
      if (lesson.files) {
        const fileIndex = lesson.files.findIndex(f => f.id === fileId);
        if (fileIndex !== -1) {
          lesson.files.splice(fileIndex, 1);
          fileFound = true;
          break;
        }
      }
    }
    if (fileFound) break;
  }
  
  if (fileFound) {
    if (writeDataFile(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to delete file' });
    }
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// Delete an audio (requires authentication)
app.delete('/api/audios/:audioId', authenticate, (req, res) => {
  const data = readDataFile();
  const audioId = parseInt(req.params.audioId);
  
  let audioFound = false;
  
  for (const module of data.modules) {
    for (const lesson of (module.lessons || [])) {
      if (lesson.audios) {
        const audioIndex = lesson.audios.findIndex(a => a.id === audioId);
        if (audioIndex !== -1) {
          lesson.audios.splice(audioIndex, 1);
          audioFound = true;
          break;
        }
      }
    }
    if (audioFound) break;
  }
  
  if (audioFound) {
    if (writeDataFile(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to delete audio' });
    }
  } else {
    res.status(404).json({ error: 'Audio not found' });
  }
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  console.log('Servindo frontend em modo produção');
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    console.log('Rota curinga atingida:', req.url);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});