import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const PageHeader = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  transition: font-size 0.3s ease;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const PageDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 750px;
  line-height: 1.6;
  transition: font-size 0.3s ease;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: var(--text-secondary);
  transition: min-height 0.3s ease;
  
  @media (max-width: 768px) {
    min-height: 250px;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    min-height: 200px;
  }
`;

function Modules() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await import('../data/ModuleData.json');
        // Sanitizar os dados
        const sanitizedModules = response.modules.map((module) => ({
          ...module,
          lessons: Array.isArray(module.lessons) ? module.lessons : [],
        }));
        const sortedModules = [...sanitizedModules].sort((a, b) => a.order - b.order);
        setModules(sortedModules);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar os módulos (Modules):', error);
        setLoading(false);
      }
    };
    
    fetchModules();
  }, []);
  
  return (
    <div className="modules-container">
      <PageHeader>
        <PageTitle>Módulos do Curso</PageTitle>
        <PageDescription>
          Explore todos os módulos disponíveis no nosso curso de inglês. 
          Cada módulo contém aulas em vídeo, arquivos para download e áudios com transcrição.
        </PageDescription>
      </PageHeader>
      
      {loading ? (
        <LoadingContainer>Carregando módulos...</LoadingContainer>
      ) : (
        <ModulesGrid>
          {modules.map((module) => (
            <Card
              key={module.id}
              title={module.title}
              description={module.description}
              image={module.image}
              badge={`${Array.isArray(module.lessons) ? module.lessons.length : 0} aulas`}
              linkTo={`/modulos/${module.id}`}
            />
          ))}
        </ModulesGrid>
      )}
    </div>
  );
}

export default Modules;