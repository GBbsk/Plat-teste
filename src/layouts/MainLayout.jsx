import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--background-card);
  box-shadow: 0 2px 10px rgba(6,182,212,0.07);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--primary);
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--card-bg);
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 1.5rem;
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  font-weight: 600;
  transition: color 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover, &.active {
    color: var(--primary);
    text-shadow: 0 2px 8px var(--primary-light);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Footer = styled.footer`
  background-color: var(--background-dark);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const MainContent = styled.main`
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`;

function MainLayout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      <Header>
        <Nav>
          <Logo onClick={() => handleNavigation('/')}>Curso de Inglês</Logo>
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
          <NavLinks $isOpen={isMenuOpen}>
            <NavLink onClick={() => handleNavigation('/')}>Home</NavLink>
            <NavLink onClick={() => handleNavigation('/modulos')}>Módulos</NavLink>
            {isAuthenticated ? (
              <>
                <NavLink onClick={() => handleNavigation('/admin')}>Painel Admin</NavLink>
                <NavLink onClick={handleLogout}>Sair</NavLink>
              </>
            ) : (
              <NavLink onClick={() => handleNavigation('/login')}>Login</NavLink>
            )}
          </NavLinks>
        </Nav>
      </Header>

      <MainContent className="container">
        <Outlet />
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterLogo>Curso de Inglês</FooterLogo>
          <FooterLinks>
            <FooterLink onClick={() => handleNavigation('/')}>Home</FooterLink>
            <FooterLink onClick={() => handleNavigation('/modulos')}>Módulos</FooterLink>
            <FooterLink onClick={() => handleNavigation('/login')}>Área do Aluno</FooterLink>
          </FooterLinks>
          <Copyright>© {new Date().getFullYear()} Curso de Inglês. Todos os direitos reservados.</Copyright>
        </FooterContent>
      </Footer>
    </>
  );
}

export default MainLayout;