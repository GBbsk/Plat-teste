import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle, FaPlayCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Adicionar ícones de seta
import Button from '../components/Button';
import FileList from '../components/FileList';
import AudioPlayer from '../components/AudioPlayer';

// --- Componentes Estilizados Base (Definidos Primeiro) ---
const PageWrapper = styled.div`
  padding: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.75rem; // Reduzindo um pouco o padding geral da página no mobile
  }
`;

const ResponsiveVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-bottom: 1.5rem; // Aumentar margem inferior

  iframe, video {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-radius: 10px;
    border: none; // Geralmente não se aplica tema a bordas de iframe de vídeo
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem; // Reduzido para mobile
  }
`;

const TabsWrapper = styled.div`
  margin-top: 1.5rem; // Adicionar margem superior
  margin-bottom: 1rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor}; // Usando tema
  gap: 1.5rem;
  font-size: 1rem;

  @media (max-width: 768px) { // Ajuste para 768px para consistência
    gap: 1rem;
    font-size: 0.9rem;
    overflow-x: auto; // Permitir rolagem horizontal em telas pequenas
    padding-bottom: 2px; // Evitar que a borda inferior corte o indicador da aba
    margin-top: 0.5rem; // Reduzido para mobile
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${({ theme, $active }) => $active ? theme.tabActiveText : theme.tabInactiveText}; // Usando tema
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  padding: 0.75rem 0.25rem; 
  margin-bottom: -1px; 
  border-bottom: 3px solid ${({ theme, $active }) => $active ? theme.tabBorder : 'transparent'}; // Usando tema
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap; 

  &:hover {
    color: ${({ theme }) => theme.primaryDark}; // Usando tema
  }

  @media (max-width: 600px) {
    padding: 0.6rem 0.5rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.secondaryText}; // Usando tema
`;

const AudioListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.2rem;
`;

const AudioCard = styled.div`
  background: ${({ theme }) => theme.audioCard?.backgroundGradient || 'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)'}; // Usando tema
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  box-shadow: ${({ theme }) => theme.audioCard?.boxShadow || '0 4px 16px rgba(80, 112, 255, 0.08)'}; // Usando tema
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 6px solid ${({ theme }) => theme.audioCard?.borderLeft || '#4f46e5'}; // Usando tema
  transition: box-shadow 0.2s, border 0.2s;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0.8rem 0.6rem;
    border-left-width: 4px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.audioCard?.hoverBoxShadow || '0 8px 24px rgba(80, 112, 255, 0.13)'}; // Usando tema
    border-left-color: ${({ theme }) => theme.audioCard?.hoverBorderLeft || '#06b6d4'}; // Usando tema
  }
`;

const AudioTitle = styled.div`
  font-weight: 700;
  font-size: 1.08rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.audioCard?.titleColor || theme.primary}; // Usando tema
  letter-spacing: 0.01em;
`;

const AudioDescription = styled.div`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.audioCard?.descriptionColor || theme.secondaryText}; // Usando tema
  margin-bottom: 0.5rem;
`;

const StyledAudio = styled.audio`
  width: 100%;
  max-width: 340px;
  min-width: 160px;
  margin: 0.2rem 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.styledAudio?.background || '#fff'}; // Usando tema
  outline: none;
  border: 2px solid ${({ theme }) => theme.styledAudio?.border || '#4f46e5'}; // Usando tema
  box-shadow: ${({ theme }) => theme.styledAudio?.boxShadow || '0 2px 8px rgba(80, 112, 255, 0.10)'}; // Usando tema

  &::-webkit-media-controls-panel {
    background-color: ${({ theme }) => theme.styledAudio?.controlsPanelBg || '#e0e7ff'}; // Usando tema
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 120px;
  }
`;

const ModuleReturnButton = styled(Button)`
  margin-bottom: 1.5rem; /* Ajuste este valor conforme necessário */
  display: block; /* Para garantir que a margem funcione como esperado */
  width: fit-content; /* Para que o botão não ocupe a largura total por padrão, a menos que o Button base já faça isso */

  @media (max-width: 768px) {
    margin-bottom: 0.75rem; // Reduzido ainda mais para mobile
  }
`;

// Novo componente para o botão de alternar layout
const ToggleLayoutButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary}; // Usando tema
  cursor: pointer;
  font-size: 1.2rem; // Tamanho do ícone
  padding: 0.25rem 0.5rem;
  display: none; // Por padrão escondido

  @media (min-width: 993px) { // Exibir apenas em telas maiores que 992px
    display: inline-flex; // Usar inline-flex para alinhar ícone
    align-items: center;
    justify-content: center;
  }
`;

// Novo componente para o cabeçalho da Sidebar (título + botão)
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Estilos que antes estavam em SidebarTitle
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor}; // Usando tema
`;


function LessonDetail() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('downloads');
  const [isWideLayout, setIsWideLayout] = useState(false); // Estado para controlar o layout


  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      try {
        const response = await import('../data/ModuleData.json');
        const foundModule = response.modules.find(m => m.id === parseInt(moduleId));
        
        if (foundModule) {
          // Simular dados que faltam no JSON para o novo layout
          const enrichedModule = {
            ...foundModule,
            stageName: foundModule.stageName || "Etapa Desconhecida",
            stageOrder: foundModule.stageOrder || 1,
            progress: foundModule.progress || Math.floor(Math.random() * 70) + 30, // Progresso aleatório do módulo
            prevModuleId: foundModule.prevModuleId || (parseInt(moduleId) > 1 ? parseInt(moduleId) - 1 : null),
            nextModuleId: foundModule.nextModuleId || (parseInt(moduleId) < response.modules.length ? parseInt(moduleId) + 1 : null),
            lessons: foundModule.lessons.map(l => ({
              ...l,
              completed: l.completed === undefined ? Math.random() > 0.5 : l.completed, // Conclusão aleatória da aula
              viewed: l.viewed === undefined ? Math.random() > 0.3 : l.viewed, // Visualização aleatória
            }))
          };
          setModule(enrichedModule);

          const lessonIndex = enrichedModule.lessons.findIndex(l => l.id === parseInt(lessonId));
          
          if (lessonIndex !== -1) {
            const currentLesson = enrichedModule.lessons[lessonIndex];
            setLesson(currentLesson);
            // REMOVER: setLessonCompleted(currentLesson.completed); 
            
            // Definir aba ativa com base no conteúdo disponível
            if (currentLesson.files && currentLesson.files.length > 0) {
              setActiveTab('downloads');
            } else if (currentLesson.audios && currentLesson.audios.length > 0) {
              setActiveTab('audios');
            } else if (currentLesson.textStudyContent) { // Supondo que textStudyContent exista
              setActiveTab('textStudy');
            }

          } else {
            setLesson(null); // Aula não encontrada
          }
        } else {
          setModule(null); // Módulo não encontrado
        }
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar a aula:', error);
        setLoading(false);
      }
    };
    
    fetchLesson();
  }, [moduleId, lessonId]);

  // REMOVER: const handleToggleComplete = () => { ... };
  
  if (loading) {
    return <LoadingContainer>Carregando aula...</LoadingContainer>;
  }
  
  if (!module || !lesson) {
    return (
      <PageWrapper>
        <ModuleReturnButton variant="outline" onClick={() => navigate(`/modulos/${moduleId || ''}`)}>
          ← Voltar para o Módulo
        </ModuleReturnButton>
        <p>Aula ou módulo não encontrado.</p>
      </PageWrapper>
    );
  }
  
  // Calcula a ordem da aula atual dentro do módulo
  const currentLessonOrder = module.lessons.findIndex(l => l.id === lesson.id) + 1;

  return (
    <PageWrapper>
      <ModuleReturnButton variant="outline" onClick={() => navigate(`/modulos/${module.id}`)}>
        ← Voltar para o Módulo
      </ModuleReturnButton>
      
      <ContentLayout $isWideLayout={isWideLayout}>
        <MainContentColumn $isWideLayout={isWideLayout}>
          <ResponsiveVideoWrapper>
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
            />
          </ResponsiveVideoWrapper>

          <LessonHeaderDetails>
            <BreadcrumbsPath>
              {/* Idealmente, o nome da etapa viria do módulo ou de um contexto superior */}
              <Link to={`/etapas/${module.stageOrder}`}>{module.stageName || `Etapa ${module.stageOrder}`}</Link>
              {' > '}
              <Link to={`/modulos/${module.id}`}>{module.name}</Link>
            </BreadcrumbsPath>
            <LessonTitleStyled>{lesson.title}</LessonTitleStyled>
            <LessonProgressStatus>
              <span> {/* Primeira linha do status */}
                Aula {currentLessonOrder}/{module.lessons.length}
                {lesson.viewed && <span className="lesson-view-status"> | 100% visualizada</span>}
              </span>
              <span> {/* Segunda linha do status */}
                Módulo: {module.progress}% concluído
                <span className="module-progress-bar"><div style={{ width: `${module.progress}%` }}></div></span>
              </span>
            </LessonProgressStatus>
          </LessonHeaderDetails>
          
          <TabsWrapper>
            <Tab $active={activeTab === 'downloads'} onClick={() => setActiveTab('downloads')}>Downloads</Tab>
            <Tab $active={activeTab === 'audios'} onClick={() => setActiveTab('audios')}>Áudios</Tab>
            <Tab $active={activeTab === 'textStudy'} onClick={() => setActiveTab('textStudy')}>Estudo do Texto</Tab>
          </TabsWrapper>

          {activeTab === 'downloads' && (
            lesson.files && lesson.files.length > 0 
            ? <FileList files={lesson.files} /> 
            : <p>Nenhum download disponível para esta aula.</p>
          )}
          {activeTab === 'audios' && (
            lesson.audios && lesson.audios.length > 0 ? (
              <AudioListWrapper>
                {lesson.audios.map(audio => (
                  <AudioCard key={audio.id}>
                    <AudioTitle>{audio.title}</AudioTitle>
                    {audio.description && <AudioDescription>{audio.description}</AudioDescription>}
                    <AudioPlayer title={audio.title} description={audio.description} audioUrl={audio.fileUrl} transcript={audio.transcript} />
                  </AudioCard>
                ))}
              </AudioListWrapper>
            ) : <p>Nenhum áudio disponível para esta aula.</p>
          )}
          {activeTab === 'textStudy' && (
            // Substitua por seu componente ou conteúdo de "Estudo do Texto"
            lesson.textStudyContent 
            ? <div>{lesson.textStudyContent}</div> 
            : <p>Nenhum estudo de texto disponível para esta aula.</p>
          )}
        </MainContentColumn>
        
        <SidebarColumn $isWideLayout={isWideLayout}>
          <SidebarHeader>
            <SidebarTitle>Aulas - {module.name}</SidebarTitle>
            <ToggleLayoutButton onClick={() => setIsWideLayout(prev => !prev)}>
              {isWideLayout ? <FaChevronRight /> : <FaChevronLeft />}
            </ToggleLayoutButton>
          </SidebarHeader>
          {module.lessons && module.lessons.length > 0 ? (
            <NextLessonsList>
              {module.lessons.map(l => (
                <ModuleLessonItem key={l.id} $active={l.id === lesson.id} $completed={l.completed}>
                  <Link to={`/modulos/${module.id}/aula/${l.id}`}>
                    {l.id === lesson.id 
                      ? <FaPlayCircle className="play-icon" /> 
                      : (l.completed ? <FaCheckCircle /> : <FaCheckCircle style={{ opacity: 0.3 }}/>) // Ícone mais sutil para não completas
                    }
                    {l.title}
                  </Link>
                </ModuleLessonItem>
              ))}
            </NextLessonsList>
          ) : (
            <p>Nenhuma aula encontrada neste módulo.</p>
          )}
          {(module.prevModuleId || module.nextModuleId) && (
            <ModuleNavigationLinks>
              {module.prevModuleId ? (
                <Link to={`/modulos/${module.prevModuleId}`}>&larr; Módulo Anterior</Link>
              ) : <span></span> /* Placeholder para manter o alinhamento */}
              {module.nextModuleId ? (
                <Link to={`/modulos/${module.nextModuleId}`}>Próximo Módulo &rarr;</Link>
              ) : <span></span> /* Placeholder */}
            </ModuleNavigationLinks>
          )}
        </SidebarColumn>
      </ContentLayout>
    </PageWrapper>
  );
}

export default LessonDetail;

// --- Adicionar definições para componentes que faltam ---
const ContentLayout = styled.div`
  display: flex;
  gap: 1.5rem; // Espaçamento entre conteúdo principal e sidebar

  // Comportamento padrão para telas maiores (sidebar à direita)
  flex-direction: row;

  // Se isWideLayout for true EM TELAS MAIORES, empilha
  ${({ $isWideLayout }) =>
    $isWideLayout &&
    `
    @media (min-width: 993px) {
      flex-direction: column;
    }
  `}

  // Em telas menores, sempre empilha (ignora isWideLayout para esta propriedade)
  @media (max-width: 992px) { 
    flex-direction: column;
  }
`;

const MainContentColumn = styled.div`
  flex: 3; // Ocupa mais espaço por padrão
  min-width: 0; 

  // Se isWideLayout for true EM TELAS MAIORES, ocupa largura total
  ${({ $isWideLayout }) =>
    $isWideLayout &&
    `
    @media (min-width: 993px) {
      flex-grow: 1;
      flex-basis: 100%;
    }
  `}
`;

const SidebarColumn = styled.div`
  flex: 1; // Ocupa menos espaço por padrão
  min-width: 0; 
  
  // Se isWideLayout for true EM TELAS MAIORES, ocupa largura total e adiciona margem
   ${({ $isWideLayout }) =>
    $isWideLayout &&
    `
    @media (min-width: 993px) {
      flex-grow: 1;
      flex-basis: 100%;
      margin-top: 2rem; 
    }
  `}
  
  @media (max-width: 992px) {
    margin-top: 2rem; 
    // flex-basis: 100%; implicitamente
  }
`;

const LessonHeaderDetails = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBg}; // Usando tema
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.cardBorder}; // Adicionando borda do card

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem; 
    margin-bottom: 0.25rem; // Reduzido drasticamente para mobile
  }
`;

const BreadcrumbsPath = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText}; // Usando tema
  margin-bottom: 0.5rem;

  a {
    color: ${({ theme }) => theme.primary}; // Usando tema
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.7rem; // Reduzido para mobile
      margin-bottom: 0.15rem; // Reduzido para mobile
    }
  }
`;

const LessonTitleStyled = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text}; // Usando tema

  @media (max-width: 768px) {
    font-size: 1.2rem; // Reduzido mais para mobile
    margin-bottom: 0.25rem; // Reduzido para mobile
  }
`;

const LessonProgressStatus = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText}; // Usando tema
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .lesson-view-status {
    color: ${({ theme }) => theme.success}; // Usando tema
    font-weight: 500;
  }

  .module-progress-bar {
    height: 6px; // Barra de progresso um pouco mais fina
    background-color: ${({ theme }) => theme.borderColor}; // Usando tema
    border-radius: 3px;
    overflow: hidden;
    margin-top: 0.15rem; // Reduzido margin-top
    
    div {
      height: 100%;
      background-color: ${({ theme }) => theme.primary}; // Usando tema
      border-radius: 3px;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.7rem; // Reduzido para mobile
    margin-bottom: 0.25rem; // Reduzido significativamente para mobile
    gap: 0.15rem; // Reduzido para mobile
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text}; // Usando tema

  @media (max-width: 768px) {
    font-size: 1.1rem; // Reduzido para mobile
  }
`;

const NextLessonsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ModuleLessonItem = styled.li`
  margin-bottom: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 6px;
    text-decoration: none;
    color: ${({ theme, $active, $completed }) => $active ? theme.primary : ($completed ? theme.text : theme.secondaryText)}; // Usando tema
    background-color: ${({ theme, $active }) => $active ? theme.primaryLight : 'transparent'}; // Usando tema
    font-weight: ${({ $active }) => $active ? '600' : '400'};
    transition: background-color 0.2s, color 0.2s;

    @media (max-width: 768px) {
      font-size: 0.9rem; // Tamanho de fonte para os itens da lista no mobile
      padding: 0.6rem;
      gap: 0.5rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryLight}; // Usando tema
      color: ${({ theme }) => theme.primary}; // Usando tema
    }

    .play-icon {
      color: ${({ theme }) => theme.primary}; // Usando tema
    }
    
    svg { 
      font-size: 1.1rem;
      color: ${({ theme, $completed, $active }) => $active ? theme.primary : ($completed ? theme.success : theme.secondaryText)}; // Usando tema
      opacity: ${({ $completed, $active }) => $active ? 1 : ($completed ? 1 : 0.5)};
      
      @media (max-width: 768px) {
        font-size: 1rem; // Ícones um pouco menores no mobile
      }
    }
  }
`;

const ModuleNavigationLinks = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor}; // Usando tema
  display: flex;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.primary}; // Usando tema
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
