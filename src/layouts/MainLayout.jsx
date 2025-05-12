import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Esta altura deve corresponder à altura real do seu Header global (definido em App.jsx).
// Ajuste este valor conforme a altura real do seu Header.
const HEADER_HEIGHT = '65px'; 

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-top: ${HEADER_HEIGHT}; /* Adiciona espaço no topo para o Header global */
  /* Mantendo o padding inferior original e permitindo que className="container" controle o restante */
  padding-bottom: 2rem; 
  /* Se a classe "container" não aplicar max-width e centralização, você pode adicionar:
     max-width: 1200px;
     margin: 0 auto;
     padding-left: 20px; // Exemplo de padding horizontal
     padding-right: 20px; // Exemplo de padding horizontal
  */
`;

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.cardBg}; /* Exemplo, ajuste para theme.footerBg se definido */
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
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
  color: ${({ theme }) => theme.primary};
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
  color: ${({ theme }) => theme.secondaryText};
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;
`;

function MainLayout() {
  const navigate = useNavigate();

  const handleFooterNavigation = (path) => {
    navigate(path);
  };

  return (
    <LayoutContainer>
      {/* O Header que existia aqui foi removido, pois agora é global em App.jsx */}
      <MainContent className="container"> {/* Mantenha className="container" se ela for usada para estilização de largura/centralização */}
        <Outlet />
      </MainContent>

      <FooterStyled>
        <FooterContent>
          <FooterLogo>Curso de Inglês</FooterLogo>
          <FooterLinks>
            <FooterLink onClick={() => handleFooterNavigation('/')}>Home</FooterLink>
            <FooterLink onClick={() => handleFooterNavigation('/modulos')}>Módulos</FooterLink>
            <FooterLink onClick={() => handleFooterNavigation('/login')}>Área do Aluno</FooterLink>
          </FooterLinks>
          <Copyright>© {new Date().getFullYear()} Curso de Inglês. Todos os direitos reservados.</Copyright>
        </FooterContent>
      </FooterStyled>
    </LayoutContainer>
  );
}

export default MainLayout;