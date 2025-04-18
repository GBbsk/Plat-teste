import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 1.5rem 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  transition: transform 0.3s ease;
  z-index: 1000;
  
  @media (max-width: 768px) {
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    width: 80%;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`;

const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled.a`
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover, &.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  background-color: var(--background);
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const MobileHeader = styled.header`
  display: none;
  position: sticky;
  top: 0;
  background-color: var(--card-bg);
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
`;

const PageTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

function AdminLayout({ isAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');
  
  useEffect(() => {
    // Atualizar o título da página com base na rota atual
    const path = location.pathname;
    if (path === '/admin') setPageTitle('Dashboard');
    else if (path === '/admin/modulos') setPageTitle('Gerenciar Módulos');
    else if (path === '/admin/aulas') setPageTitle('Gerenciar Aulas');
    else if (path === '/admin/arquivos') setPageTitle('Gerenciar Arquivos e Áudios');
  }, [location]);
  
  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/login');
  };
  
  // Redirecionar para login se não estiver autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <AdminContainer>
      <Overlay isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <SidebarTitle>Painel Administrativo</SidebarTitle>
        </SidebarHeader>
        
        <SidebarNav>
          <SidebarLink 
            className={location.pathname === '/admin' ? 'active' : ''}
            onClick={() => handleNavigation('/admin')}
          >
            Dashboard
          </SidebarLink>
          <SidebarLink 
            className={location.pathname === '/admin/modulos' ? 'active' : ''}
            onClick={() => handleNavigation('/admin/modulos')}
          >
            Gerenciar Módulos
          </SidebarLink>
          <SidebarLink 
            className={location.pathname === '/admin/aulas' ? 'active' : ''}
            onClick={() => handleNavigation('/admin/aulas')}
          >
            Gerenciar Aulas
          </SidebarLink>
          <SidebarLink 
            className={location.pathname === '/admin/arquivos' ? 'active' : ''}
            onClick={() => handleNavigation('/admin/arquivos')}
          >
            Gerenciar Arquivos e Áudios
          </SidebarLink>
          <SidebarLink onClick={handleLogout}>
            Sair
          </SidebarLink>
        </SidebarNav>
      </Sidebar>
      
      <MainContent>
        <MobileHeader>
          <MobileMenuButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            ☰
          </MobileMenuButton>
          <h2>Painel Admin</h2>
        </MobileHeader>
        
        <PageTitle>{pageTitle}</PageTitle>
        <Outlet />
      </MainContent>
    </AdminContainer>
  );
}

export default AdminLayout;