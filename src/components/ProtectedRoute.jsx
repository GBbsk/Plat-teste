import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const authData = JSON.parse(localStorage.getItem('adminAuth') || '{}');
  const isAuthenticated = authData.isAuthenticated;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;