import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import FileList from '../components/FileList';
import AudioPlayer from '../components/AudioPlayer';

const LessonContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.2rem 0.5rem 2rem 0.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);

  @media (max-width: 600px) {
    max-width: 100vw;
    border-radius: 0;
    padding: 0.5rem 0.2rem 1.5rem 0.2rem;
    box-shadow: none;
  }
`;

const LessonTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem 0 0.7rem 0;
  color: var(--text-primary);

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin: 0.7rem 0 0.5rem 0;
  }
`;

const ResponsiveVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-bottom: 1.2rem;

  iframe, video {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
  }
`;

const TabsWrapper = styled.div`
  margin: 1.2rem 0 0.7rem 0;
  display: flex;
  border-bottom: 1px solid var(--border);
  gap: 1.5rem;
  font-size: 1rem;

  @media (max-width: 600px) {
    gap: 0.7rem;
    font-size: 0.95rem;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => $active ? 'var(--primary)' : 'transparent'};
  color: ${({ $active }) => $active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-weight: ${({ $active }) => $active ? 700 : 400};
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: color 0.2s, border 0.2s;
  outline: none;

  &:hover {
    color: var(--primary);
  }
`;

const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;


const TabContent = styled.div`
  display: ${({ $active }) => $active ? 'block' : 'none'};
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
  color: var(--text-secondary);
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AudioListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.2rem;
`;

const AudioCard = styled.div`
  background: linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%);
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  box-shadow: 0 4px 16px rgba(80, 112, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 6px solid #4f46e5;
  transition: box-shadow 0.2s, border 0.2s;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0.8rem 0.6rem;
    border-left-width: 4px;
  }

  &:hover {
    box-shadow: 0 8px 24px rgba(80, 112, 255, 0.13);
    border-left-color: #06b6d4;
  }
`;

const AudioTitle = styled.div`
  font-weight: 700;
  font-size: 1.08rem;
  margin-bottom: 0.25rem;
  color: #4f46e5;
  letter-spacing: 0.01em;
`;

const AudioDescription = styled.div`
  font-size: 0.97rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const StyledAudio = styled.audio`
  width: 100%;
  max-width: 340px;
  min-width: 160px;
  margin: 0.2rem 0;
  border-radius: 8px;
  background: #fff;
  outline: none;
  border: 2px solid #4f46e5;
  box-shadow: 0 2px 8px rgba(80, 112, 255, 0.10);

  &::-webkit-media-controls-panel {
    background-color: #e0e7ff;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 120px;
  }
`;

function LessonDetail() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('files');
  const [prevLesson, setPrevLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);
  const [showTranscript, setShowTranscript] = useState({}); // <-- Move here

  useEffect(() => {
    // Carregar os dados da aula específica
    const fetchLesson = async () => {
      try {
        // Em um ambiente real, isso seria uma chamada de API
        // Mas como estamos usando um arquivo JSON local, vamos importá-lo diretamente
        const response = await import('../data/ModuleData.json');
        const foundModule = response.modules.find(m => m.id === parseInt(moduleId));
        
        if (foundModule) {
          setModule(foundModule);
          
          // Ordenar as aulas pela propriedade 'order'
          const sortedLessons = [...foundModule.lessons].sort((a, b) => a.order - b.order);
          const lessonIndex = sortedLessons.findIndex(l => l.id === parseInt(lessonId));
          
          if (lessonIndex !== -1) {
            setLesson(sortedLessons[lessonIndex]);
            
            // Definir aulas anterior e próxima para navegação
            if (lessonIndex > 0) {
              setPrevLesson(sortedLessons[lessonIndex - 1]);
            }
            
            if (lessonIndex < sortedLessons.length - 1) {
              setNextLesson(sortedLessons[lessonIndex + 1]);
            }
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar a aula:', error);
        setLoading(false);
      }
    };
    
    fetchLesson();
  }, [moduleId, lessonId]);
  
  // Definir a aba ativa com base no conteúdo disponível
  useEffect(() => {
    if (lesson) {
      if (lesson.files && lesson.files.length > 0) {
        setActiveTab('files');
      } else if (lesson.audios && lesson.audios.length > 0) {
        setActiveTab('audios');
      }
    }
  }, [lesson]);
  
  if (loading) {
    return <LoadingContainer>Carregando aula...</LoadingContainer>;
  }
  
  if (!module || !lesson) {
    return (
      <div>
        <BackButton 
          variant="outline" 
          onClick={() => navigate(`/modulos/${moduleId}`)}
        >
          ← Voltar para o Módulo
        </BackButton>
        <p>Aula não encontrada.</p>
      </div>
    );
  }
  
  return (
    <div>
      <BackButton 
        variant="outline" 
        onClick={() => navigate(`/modulos/${moduleId}`)}
      >
        ← Voltar para o Módulo
      </BackButton>
      
      <LessonContainer>
        {/* REMOVE this button below, as handleBack is not defined */}
        {/* <button onClick={handleBack} style={{ marginBottom: '1rem' }}>
          ← Voltar para o Módulo
        </button> */}
        <LessonTitle>{lesson.title}</LessonTitle>
        <ResponsiveVideoWrapper>
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            allowFullScreen
            frameBorder="0"
          />
        </ResponsiveVideoWrapper>
        <TabsWrapper>
          <Tab $active={activeTab === 'files'} onClick={() => setActiveTab('files')}>Arquivos</Tab>
          <Tab $active={activeTab === 'audios'} onClick={() => setActiveTab('audios')}>Áudios</Tab>
        </TabsWrapper>
        {activeTab === 'files' && (
          <FileList files={lesson.files} />
        )}
        {activeTab === 'audios' && (
          lesson.audios && lesson.audios.length > 0 ? (
            <AudioListWrapper>
              {lesson.audios.map(audio => (
                <AudioCard key={audio.id}>
                  <AudioTitle>{audio.title}</AudioTitle>
                  {audio.description && (
                    <AudioDescription>{audio.description}</AudioDescription>
                  )}
                  {/* Substitua o player nativo pelo componente AudioPlayer */}
                  <AudioPlayer
                    title={audio.title}
                    description={audio.description}
                    audioUrl={audio.fileUrl}
                    transcript={audio.transcript}
                  />
                </AudioCard>
              ))}
            </AudioListWrapper>
          ) : (
            <p>Nenhum áudio disponível para esta aula.</p>
          )
        )}
      </LessonContainer>
    </div>
  );
}

export default LessonDetail;