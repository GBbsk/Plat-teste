import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import LessonDetail from './pages/LessonDetail';
import Login from './pages/Login';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminModules from './pages/admin/AdminModules';
import AdminLessons from './pages/admin/Lessons';
import AdminFiles from './pages/admin/Files';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Verificar autenticação ao carregar a aplicação
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="modulos" element={<Modules />} />
        <Route path="modulos/:moduleId" element={<ModuleDetail />} />
        <Route path="modulos/:moduleId/aula/:lessonId" element={<LessonDetail />} />
        <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Route>
      
      {/* Rotas de administração (protegidas) */}
      <Route path="/admin" element={<AdminLayout isAuthenticated={isAuthenticated} />}>
        <Route index element={<AdminDashboard />} />
        <Route path="modulos" element={<AdminModules />} />
        <Route path="aulas" element={<AdminLessons />} />
        <Route path="arquivos" element={<AdminFiles />} />
      </Route>
    </Routes>
  );
}

export default App;