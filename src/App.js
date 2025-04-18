import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Module from './pages/Modules';
import Lesson from './pages/LessonDetail';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Modules from './pages/admin/AdminModules';
import Lessons from './pages/admin/Lessons';
import Files from './pages/admin/Files';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/modulo/:moduleId" element={<Module />} />
        <Route path="/aula/:lessonId" element={<Lesson />} />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/AdminModules" 
          element={
            <ProtectedRoute>
              <Modules />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/Lessons" 
          element={
            <ProtectedRoute>
              <Lessons />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/files" 
          element={
            <ProtectedRoute>
              <Files />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect /admin to /admin/dashboard */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;