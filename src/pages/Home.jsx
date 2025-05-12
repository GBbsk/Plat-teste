import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import Button from '../components/Button';

// Estilos
const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primaryDark} 100%);
  color: white; /* Mantido branco, assumindo bom contraste com o gradiente do tema */
  padding: 4rem 2rem;
  border-radius: 18px;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    padding: 2rem 0.7rem;
    border-radius: 8px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

const FeaturesSection = styled.section`
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    margin: 3rem 0;
  }
  
  @media (max-width: 576px) {
    margin: 2.5rem 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Idealmente, a sombra também viria do tema */
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 6px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 4rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Idealmente, a sombra também viria do tema */
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    margin: 3rem 0;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
    margin: 2.5rem 0;
    border-radius: 8px;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }
`;

const CTADescription = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`;

function Home() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true); // Adicionado para suportar o estado de carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        console.log('Fazendo requisição para /api/modules');
        const response = await fetch('/api/modules');
        console.log('Status da resposta:', response.status);
        if (!response.ok) {
          const text = await response.text();
          console.error('Resposta inválida:', text);
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Dados recebidos (brutos):', JSON.stringify(data));
        console.log('Dados são array?', Array.isArray(data));
        setModules(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erro ao carregar módulos:', error);
        setModules([]);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };
    
    fetchModules();
  }, []);

  return (
    <div style={{ padding: '0 1rem' }}>
      <HeroSection>
        <HeroTitle>Aprenda Inglês de Forma Eficiente</HeroTitle>
        <HeroSubtitle>
          Nossa plataforma oferece um método comprovado para você dominar o inglês 
          com aulas interativas, áudios e materiais exclusivos.
        </HeroSubtitle>
        <Button 
          size="large" 
          onClick={() => navigate('/modulos')}
        >
          Começar Agora
        </Button>
      </HeroSection>
      
      <section>
        <SectionTitle>Módulos em Destaque</SectionTitle>
        
        {loading ? (
          <p>Carregando módulos...</p>
        ) : (
          <ModulesGrid>
            {modules.slice(0, 3).map((module) => (
              <Card
                key={module.id}
                title={module.title}
                description={module.description}
                image={module.image}
                badge={`${module.lessons ? module.lessons.length : 0} aulas`}
                linkTo={`/modulos/${module.id}`}
              />
            ))}
          </ModulesGrid>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button 
            variant="outline" 
            onClick={() => navigate('/modulos')}
          >
            Ver Todos os Módulos
          </Button>
        </div>
      </section>
      
      <FeaturesSection>
        <SectionTitle>Por que escolher nossa plataforma?</SectionTitle>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🎓</FeatureIcon>
            <FeatureTitle>Conteúdo Exclusivo</FeatureTitle>
            <FeatureDescription>
              Aulas preparadas por professores experientes com foco na fluência e comunicação.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🔊</FeatureIcon>
            <FeatureTitle>Áudios com Transcrição</FeatureTitle>
            <FeatureDescription>
              Pratique a compreensão auditiva com nossos áudios exclusivos e acompanhe a transcrição em tempo real.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Acesso em Qualquer Dispositivo</FeatureTitle>
            <FeatureDescription>
              Estude quando e onde quiser através do seu computador, tablet ou smartphone.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <CTASection>
        <CTATitle>Pronto para dominar o inglês?</CTATitle>
        <CTADescription>
          Comece agora mesmo a estudar com nossa metodologia exclusiva e 
          alcance a fluência que você sempre desejou.
        </CTADescription>
        <Button 
          size="large" 
          onClick={() => navigate('/modulos')}
        >
          Acessar Módulos
        </Button>
      </CTASection>
    </div>
  );
}

export default Home;