import { Routes, Route, Navigate } from 'react-router-dom'; // Removed BrowserRouter
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Components
import Header from './components/Header/Header'; // Supondo que o Header exista e aceite props de tema

// Pages
import Home from './pages/Home';
// import Modules from './pages/Modules'; // Modules foi renomeado para ModuleList abaixo para consistência com o snippet
import ModuleList from './pages/Modules'; // Renomeado para ModuleList para consistência, ajuste se o nome real for Modules
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
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  // Verificar autenticação ao carregar a aplicação
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
    // Opcional: Carregar tema do localStorage ao iniciar
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Opcional: Salvar no localStorage
    localStorage.setItem('theme', newTheme);
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {/* BrowserRouter was removed from here */}
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<MainLayout /* toggleTheme={toggleTheme} currentTheme={theme} */ />}>
          <Route index element={<Home />} /> {/* Alterado de Navigate para Home, ajuste se necessário */}
          <Route path="modulos" element={<ModuleList />} />
          <Route path="modulos/:moduleId" element={<ModuleDetail />} />
          <Route path="modulos/:moduleId/aula/:lessonId" element={<LessonDetail />} />
          <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Route>
        
        {/* Rotas de administração (protegidas) */}
        <Route path="/admin" element={<AdminLayout isAuthenticated={isAuthenticated} /* toggleTheme={toggleTheme} currentTheme={theme} */ />}>
          <Route index element={<AdminDashboard />} />
          <Route path="modulos" element={<AdminModules />} />
          <Route path="aulas" element={<AdminLessons />} />
          <Route path="arquivos" element={<AdminFiles />} />
        </Route>
      </Routes>
      {/* BrowserRouter was removed from here */}
    </ThemeProvider>
  );
}

export default App;