import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem; /* Isso contribui para a altura do header */
  background-color: ${({ theme }) => theme.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  
  position: fixed; /* Torna o header fixo no topo */
  top: 0;
  left: 0;
  width: 100%; /* Faz o header ocupar toda a largura */
  z-index: 1000; /* Garante que o header fique acima de outros elementos */
  box-sizing: border-box; /* Garante que padding e border não aumentem a largura total além de 100% */
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryDark};
  }
`;


const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <HeaderContainer>
      <Logo to="/">Curso de Inglês</Logo>
      {/* Outros itens do header */}
      <ThemeToggleButton toggleTheme={toggleTheme} currentTheme={currentTheme} />
    </HeaderContainer>
  );
};

export default Header;