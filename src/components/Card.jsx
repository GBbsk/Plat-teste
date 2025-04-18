import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(6,182,212,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 32px rgba(6,182,212,0.13);
    background: linear-gradient(120deg, var(--primary-light) 0%, var(--background-card) 100%);
  }

  @media (max-width: 576px) {
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`;

const CardImage = styled.div`
  height: 180px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
  
  @media (max-width: 576px) {
    height: 160px;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 576px) {
    padding: 1.25rem;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-dark);

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0 0 1rem;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const CardBadge = styled.span`
  background-color: var(--primary);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-weight: 600;
`;

const Card = ({ 
  id, 
  title, 
  description, 
  image, 
  badge, 
  onClick, 
  linkTo,
  ...props 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (linkTo) {
      navigate(linkTo);
    }
  };
  
  return (
    <CardContainer onClick={handleClick} {...props}>
      {image && <CardImage image={image} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {badge && (
          <CardFooter>
            <CardBadge>{badge}</CardBadge>
          </CardFooter>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card;