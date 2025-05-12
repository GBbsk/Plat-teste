import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;

  &:hover {
    background: ${({ theme }) => theme.primaryLight};
  }

  svg {
    height: 1.2rem;
    width: 1.2rem;
    transition: all 0.3s linear;
  }
`;

const ThemeToggleButton = ({ toggleTheme, currentTheme }) => {
  const isLight = currentTheme === 'light';
  return (
    <ToggleButton onClick={toggleTheme} title={isLight ? "Ativar tema escuro" : "Ativar tema claro"}>
      {isLight ? <FaMoon /> : <FaSun />}
    </ToggleButton>
  );
};

export default ThemeToggleButton;