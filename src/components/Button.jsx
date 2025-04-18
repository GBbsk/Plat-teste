import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(6,182,212,0.10);
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 4px 16px rgba(6,182,212,0.15);
  }

  &:active {
    background: var(--secondary);
    color: var(--primary-dark);
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
`;

function Button({ children, variant = 'primary', size = 'medium', ...props }) {
  return (
    <ButtonStyles $variant={variant} $size={size} {...props}>
      {children}
    </ButtonStyles>
  );
}

export default Button;