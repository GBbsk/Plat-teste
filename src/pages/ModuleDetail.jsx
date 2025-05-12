import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const ModuleContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Idealmente, a sombra também viria do tema */
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ModuleImage = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const ModuleInfo = styled.div`
  flex: 1;
`;

const ModuleTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const ModuleDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const LessonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LessonCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg}; /* Alterado de var(--background) para theme.cardBg */
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;
    gap: 1rem;
  }
`;

const LessonNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: white; /* Mantido branco, assumindo bom contraste */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`;

const LessonInfo = styled.div`
  flex: 1;
`;

const LessonTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.text};
`;

const LessonDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const LessonMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.secondaryText};
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const LessonDuration = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const BackButton = styled(Button)`
  margin-bottom: 1.5rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.secondaryText};
`;

function ModuleDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Carregar os dados do módulo específico
    const fetchModule = async () => {
      try {
        // Em um ambiente real, isso seria uma chamada de API
        // Mas como estamos usando um arquivo JSON local, vamos importá-lo diretamente
        const response = await import('../data/ModuleData.json');
        const foundModule = response.modules.find(m => m.id === parseInt(moduleId));
        
        if (foundModule) {
          // Ordenar as aulas pela propriedade 'order'
          foundModule.lessons = [...foundModule.lessons].sort((a, b) => a.order - b.order);
          setModule(foundModule);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar o módulo:', error);
        setLoading(false);
      }
    };
    
    fetchModule();
  }, [moduleId]);
  
  const handleLessonClick = (lessonId) => {
    navigate(`/modulos/${moduleId}/aula/${lessonId}`);
  };
  
  if (loading) {
    return <LoadingContainer>Carregando módulo...</LoadingContainer>;
  }
  
  if (!module) {
    return (
      <div>
        <BackButton 
          variant="outline" 
          onClick={() => navigate('/modulos')}
        >
          ← Voltar para Módulos
        </BackButton>
        <p>Módulo não encontrado.</p>
      </div>
    );
  }
  
  return (
    <div>
      <BackButton 
        variant="outline" 
        onClick={() => navigate('/modulos')}
      >
        ← Voltar para Módulos
      </BackButton>
      
      <ModuleContainer>
        <ModuleHeader>
          <ModuleImage image={module.image} />
          <ModuleInfo>
            <ModuleTitle>{module.title}</ModuleTitle>
            <ModuleDescription>{module.description}</ModuleDescription>
            <div>{module.lessons.length} aulas</div>
          </ModuleInfo>
        </ModuleHeader>
        
        <LessonsList>
          {module.lessons.map((lesson, index) => (
            <LessonCard 
              key={lesson.id} 
              onClick={() => handleLessonClick(lesson.id)}
            >
              <LessonNumber>{index + 1}</LessonNumber>
              <LessonInfo>
                <LessonTitle>{lesson.title}</LessonTitle>
                <LessonDescription>{lesson.description}</LessonDescription>
                <LessonMeta>
                  <LessonDuration>
                    <span>⏱️</span> {lesson.duration}
                  </LessonDuration>
                  {lesson.files && lesson.files.length > 0 && (
                    <span>📄 {lesson.files.length} arquivos</span>
                  )}
                  {lesson.audios && lesson.audios.length > 0 && (
                    <span>🔊 {lesson.audios.length} áudios</span>
                  )}
                </LessonMeta>
              </LessonInfo>
            </LessonCard>
          ))}
        </LessonsList>
      </ModuleContainer>
    </div>
  );
}

export default ModuleDetail;