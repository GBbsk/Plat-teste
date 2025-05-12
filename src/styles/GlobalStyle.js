import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Variáveis CSS podem ser definidas aqui se necessário, mas com ThemeProvider,
       o acesso direto via props.theme é mais comum em styled-components.
       No entanto, para elementos não-React ou estilos muito genéricos, pode ser útil. */
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease; // Transição suave
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text}; // Ou uma cor específica para títulos se definida no tema
    margin-bottom: 0.75rem;
    font-weight: 600; // Exemplo
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  /* Adicione mais estilos globais ou resets conforme necessário */
`;