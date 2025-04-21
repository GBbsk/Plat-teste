import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

// Definição da URL da API
const API_URL = '/api'; // Usando o mesmo padrão de AdminModules.jsx

// Headers de autenticação
const authHeaders = {
  username: 'admin',
  password: 'admin123'
};

const LessonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  width: 300px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const LessonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LessonCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const LessonInfo = styled.div`
  flex: 1;
`;

const LessonTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
`;

const LessonDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const LessonMeta = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  gap: 1rem;
`;

const LessonActions = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const FormContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: var(--success);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
`;

// Adicione esta função antes do componente Lessons
function convertUrl(url, type) {
  if (!url) return url;

  // Google Drive (file)
  if ((type === 'fileUrl' || type === 'audioUrl') && url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/d\/([^\/\?]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }

  // Google Drive (open)
  if ((type === 'fileUrl' || type === 'audioUrl') && url.includes('drive.google.com/open')) {
    const match = url.match(/[\?&]id=([^&]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }

  // YouTube
  if ((type === 'videoUrl' || type === 'fileUrl') && (url.includes('youtube.com/') || url.includes('youtu.be/'))) {
    let videoId = '';
    let siParam = '';

    // Extrair o parâmetro si se existir
    const siMatch = url.match(/[\?&]si=([^&]+)/);
    if (siMatch && siMatch[1]) {
      siParam = `?si=${siMatch[1]}`;
    }

    if (url.includes('youtu.be/')) {
      const match = url.match(/youtu\.be\/([^\?&]+)/);
      videoId = match && match[1];
    } else if (url.includes('youtube.com/watch')) {
      const match = url.match(/[\?&]v=([^&]+)/);
      videoId = match && match[1];
    } else if (url.includes('youtube.com/embed/')) {
      const match = url.match(/embed\/([^\?&\/]+)/);
      videoId = match && match[1];
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}${siParam}`;
    }
  }

  // Dropbox
  if ((type === 'audioUrl' || type === 'fileUrl') && url.includes('dropbox.com')) {
    let formatted = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    formatted = formatted.replace(/([?&]dl=\d+)/, '');
    formatted = formatted.replace(/[?&]$/, '');
    return formatted;
  }

  return url;
}

function Lessons() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editId = queryParams.get('edit');
  const moduleFilter = queryParams.get('module');
  
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState(moduleFilter || '');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    moduleId: '',
    title: '',
    description: '',
    videoUrl: '',
    duration: '',
    order: 1,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    // Carregar os dados dos módulos e aulas
    const fetchData = async () => {
      try {
        // Fazer requisição para a API para obter os módulos
        console.log('Fazendo requisição para /api/modules (Lessons)');
        const response = await fetch(`${API_URL}/modules`);
        console.log('Status da resposta (Lessons):', response.status);
        
        if (!response.ok) {
          const text = await response.text();
          console.error('Resposta inválida (Lessons):', text);
          throw new Error('Failed to fetch modules');
        }
        
        const data = await response.json();
        console.log('Dados recebidos (Lessons):', JSON.stringify(data));
        
        // Garantir que todos os módulos tenham lessons
        const sanitizedData = data.map((module) => ({
          ...module,
          lessons: Array.isArray(module.lessons) ? module.lessons : [],
        }));
        
        // Ordenar os módulos pela propriedade 'order'
        const sortedModules = [...sanitizedData].sort((a, b) => a.order - b.order);
        setModules(sortedModules);
        
        // Extrair todas as aulas de todos os módulos
        let allLessons = [];
        sortedModules.forEach(module => {
          // Ensure lessons exists and is an array
          const moduleLessons = Array.isArray(module.lessons) ? module.lessons.map(lesson => ({
            ...lesson,
            moduleName: module.title,
            moduleId: module.id
          })) : [];
          allLessons = [...allLessons, ...moduleLessons];
        });
        
        // Ordenar as aulas pela propriedade 'order' dentro de cada módulo
        allLessons.sort((a, b) => {
          if (a.moduleId === b.moduleId) {
            return a.order - b.order;
          }
          return a.moduleId - b.moduleId;
        });
        
        setLessons(allLessons);
        setLoading(false);
        
        // Se houver um ID para edição na URL, carregar os dados dessa aula
        if (editId) {
          const lessonToEdit = allLessons.find(l => l.id === parseInt(editId));
          if (lessonToEdit) {
            setFormData({
              id: lessonToEdit.id,
              moduleId: lessonToEdit.moduleId,
              title: lessonToEdit.title,
              description: lessonToEdit.description,
              videoUrl: lessonToEdit.videoUrl || '',
              duration: lessonToEdit.duration || '',
              order: lessonToEdit.order,
            });
            setShowForm(true);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [editId]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'videoUrl' ? convertUrl(value, 'videoUrl') : value,
    }));
  };
  
  const handleAddLesson = () => {
    // Definir o módulo padrão se houver um filtro ativo
    const defaultModuleId = selectedModule ? parseInt(selectedModule) : (modules.length > 0 ? modules[0].id : '');
    
    setFormData({
      id: '',
      moduleId: defaultModuleId,
      title: '',
      description: '',
      videoUrl: '',
      duration: '',
      order: 1,
    });
    setShowForm(true);
    setError('');
    setSuccess('');
  };
  
  const handleEditLesson = (lesson) => {
    setFormData({
      id: lesson.id,
      moduleId: lesson.moduleId,
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl || '',
      duration: lesson.duration || '',
      order: lesson.order,
    });
    setShowForm(true);
    setError('');
    setSuccess('');
    
    // Atualizar a URL para incluir o ID da aula sendo editada
    navigate(`/admin/aulas?edit=${lesson.id}`);
  };
  
  const handleCancelForm = () => {
    setShowForm(false);
    setFormData({
      id: '',
      moduleId: '',
      title: '',
      description: '',
      videoUrl: '',
      duration: '',
      order: 1,
    });
    setError('');
    setSuccess('');
    
    // Remover o parâmetro de edição da URL
    if (selectedModule) {
      navigate(`/admin/aulas?module=${selectedModule}`);
    } else {
      navigate('/admin/aulas');
    }
  };
  
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Only require the fields you want (e.g., title, module, etc.)
    if (!formData.title || !formData.moduleId /* ...other required fields... */) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    try {
      // Preparar os dados da aula para envio à API
      const lessonData = {
        title: formData.title,
        description: formData.description,
        videoUrl: formData.videoUrl || '',
        duration: formData.duration || '',
        order: formData.order,
        files: formData.files || [],
        audios: formData.audios || []
      };
      
      let response;
      
      if (formData.id) {
        // Editar uma aula existente
        // Verificar se a aula está sendo movida para outro módulo
        let currentModuleId = null;
        
        // Encontrar o módulo atual da aula
        for (const module of modules) {
          if (Array.isArray(module.lessons)) {
            const lesson = module.lessons.find(l => l.id === formData.id);
            if (lesson) {
              currentModuleId = module.id;
              break;
            }
          }
        }
        
        if (currentModuleId === null) {
          setError('Aula não encontrada.');
          return;
        }
        
        // Se a aula está sendo movida para outro módulo
        if (currentModuleId !== formData.moduleId) {
          // Primeiro, excluir a aula do módulo atual
          const deleteResponse = await fetch(`${API_URL}/modules/${currentModuleId}/lessons/${formData.id}`, {
            method: 'DELETE',
            headers: {
              username: authHeaders.username,
              password: authHeaders.password
            }
          });
          
          if (!deleteResponse.ok) {
            const text = await deleteResponse.text();
            console.error('Erro ao mover a aula (exclusão):', text);
            throw new Error('Falha ao mover a aula para outro módulo');
          }
          
          // Depois, adicionar a aula ao novo módulo
          response = await fetch(`${API_URL}/modules/${formData.moduleId}/lessons`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              username: authHeaders.username,
              password: authHeaders.password
            },
            body: JSON.stringify(lessonData)
          });
        } else {
          // Atualizar a aula no mesmo módulo
          response = await fetch(`${API_URL}/modules/${formData.moduleId}/lessons/${formData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              username: authHeaders.username,
              password: authHeaders.password
            },
            body: JSON.stringify(lessonData)
          });
        }
      } else {
        // Adicionar uma nova aula
        response = await fetch(`${API_URL}/modules/${formData.moduleId}/lessons`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            username: authHeaders.username,
            password: authHeaders.password
          },
          body: JSON.stringify(lessonData)
        });
      }
      
      if (!response.ok) {
        const text = await response.text();
        console.error('Erro na resposta (Lessons):', text);
        throw new Error('Falha ao salvar a aula');
      }
      
      // Recarregar os dados após a operação bem-sucedida
      const fetchResponse = await fetch(`${API_URL}/modules`);
      if (!fetchResponse.ok) {
        throw new Error('Falha ao recarregar os módulos');
      }
      
      const data = await fetchResponse.json();
      
      // Garantir que todos os módulos tenham lessons
      const sanitizedData = data.map((module) => ({
        ...module,
        lessons: Array.isArray(module.lessons) ? module.lessons : [],
      }));
      
      // Ordenar os módulos pela propriedade 'order'
      sanitizedData.sort((a, b) => a.order - b.order);
      setModules(sanitizedData);
      
      // Reconstruir a lista completa de aulas
      let allLessons = [];
      sanitizedData.forEach(module => {
        const moduleLessons = module.lessons.map(lesson => ({
          ...lesson,
          moduleName: module.title,
          moduleId: module.id
        }));
        allLessons = [...allLessons, ...moduleLessons];
      });
      
      // Ordenar as aulas pela propriedade 'order' dentro de cada módulo
      allLessons.sort((a, b) => {
        if (a.moduleId === b.moduleId) {
          return a.order - b.order;
        }
        return a.moduleId - b.moduleId;
      });
      
      setLessons(allLessons);
      setSuccess(formData.id ? `Aula "${formData.title}" atualizada com sucesso!` : `Aula "${formData.title}" adicionada com sucesso!`);
      
      // Limpar o formulário após o sucesso
      setTimeout(() => {
        setShowForm(false);
        setFormData({
          id: '',
          moduleId: '',
          title: '',
          description: '',
          videoUrl: '',
          duration: '',
          order: 1,
        });
        setSuccess('');
        
        // Remover o parâmetro de edição da URL
        if (selectedModule) {
          navigate(`/admin/aulas?module=${selectedModule}`);
        } else {
          navigate('/admin/aulas');
        }
      }, 2000);
    } catch (error) {
      console.error('Erro ao salvar a aula:', error);
      setError('Ocorreu um erro ao salvar a aula. Tente novamente.');
    }
  };
  
  const handleDeleteLesson = async (lessonId) => {
    if (!window.confirm('Tem certeza que deseja excluir esta aula? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    try {
      // Encontrar em qual módulo a aula está
      let moduleId = null;
      
      for (const module of modules) {
        if (Array.isArray(module.lessons)) {
          const lesson = module.lessons.find(l => l.id === lessonId);
          if (lesson) {
            moduleId = module.id;
            break;
          }
        }
      }
      
      if (moduleId === null) {
        setError('Aula não encontrada.');
        return;
      }
      
      // Fazer requisição para a API para excluir a aula
      const response = await fetch(`${API_URL}/modules/${moduleId}/lessons/${lessonId}`, {
        method: 'DELETE',
        headers: {
          username: authHeaders.username,
          password: authHeaders.password
        }
      });
      
      if (!response.ok) {
        const text = await response.text();
        console.error('Erro na resposta (Lessons - exclusão):', text);
        throw new Error('Falha ao excluir a aula');
      }
      
      // Recarregar os dados após a exclusão bem-sucedida
      const fetchResponse = await fetch(`${API_URL}/modules`);
      if (!fetchResponse.ok) {
        throw new Error('Falha ao recarregar os módulos');
      }
      
      const data = await fetchResponse.json();
      
      // Garantir que todos os módulos tenham lessons
      const sanitizedData = data.map((module) => ({
        ...module,
        lessons: Array.isArray(module.lessons) ? module.lessons : [],
      }));
      
      // Ordenar os módulos pela propriedade 'order'
      sanitizedData.sort((a, b) => a.order - b.order);
      setModules(sanitizedData);
      
      // Reconstruir a lista completa de aulas
      let allLessons = [];
      sanitizedData.forEach(module => {
        const moduleLessons = module.lessons.map(lesson => ({
          ...lesson,
          moduleName: module.title,
          moduleId: module.id
        }));
        allLessons = [...allLessons, ...moduleLessons];
      });
      
      setLessons(allLessons);
      
      setSuccess('Aula excluída com sucesso!');
      
      // Limpar a mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (error) {
      console.error('Erro ao excluir a aula:', error);
      setError('Ocorreu um erro ao excluir a aula. Tente novamente.');
    }
  };
  
  const handleModuleFilterChange = (e) => {
    const moduleId = e.target.value;
    setSelectedModule(moduleId);
    
    // Atualizar a URL com o filtro de módulo
    if (moduleId) {
      navigate(`/admin/aulas?module=${moduleId}`);
    } else {
      navigate('/admin/aulas');
    }
  };
  
  // Filtrar as aulas com base no termo de pesquisa e no módulo selecionado
  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesModule = !selectedModule || lesson.moduleId === parseInt(selectedModule);
    
    return matchesSearch && matchesModule;
  });
  
  if (loading) {
    return <p>Carregando aulas...</p>;
  }
  
  return (
    <LessonsContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      {showForm ? (
        <FormContainer>
          <FormTitle>{formData.id ? 'Editar Aula' : 'Adicionar Nova Aula'}</FormTitle>
          
          <form onSubmit={handleSubmitForm}>
            <FormGroup>
              <Label htmlFor="moduleId">Módulo *</Label>
              <FilterSelect
                id="moduleId"
                name="moduleId"
                value={formData.moduleId}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione um módulo</option>
                {modules.map(module => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </FilterSelect>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="title">Título da Aula *</Label>
              <Input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                // required   // REMOVE this line if present
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="videoUrl">URL do Vídeo (YouTube Embed)</Label>
              <Input 
                type="text" 
                id="videoUrl" 
                name="videoUrl" 
                value={formData.videoUrl} 
                onChange={handleInputChange} 
                placeholder="https://www.youtube.com/embed/ID_DO_VIDEO"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="duration">Duração</Label>
              <Input 
                type="text" 
                id="duration" 
                name="duration" 
                value={formData.duration} 
                onChange={handleInputChange} 
                placeholder="Ex: 15:30"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="order">Ordem</Label>
              <Input 
                type="number" 
                id="order" 
                name="order" 
                value={formData.order} 
                onChange={handleInputChange} 
                min="1" 
              />
            </FormGroup>
            
            <FormActions>
              <Button 
                variant="outline" 
                type="button" 
                onClick={handleCancelForm}
              >
                Cancelar
              </Button>
              <Button type="submit">
                {formData.id ? 'Atualizar Aula' : 'Adicionar Aula'}
              </Button>
            </FormActions>
          </form>
        </FormContainer>
      ) : (
        <>
          <ActionBar>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <SearchInput 
                type="text" 
                placeholder="Pesquisar aulas..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              
              <FilterSelect
                value={selectedModule}
                onChange={handleModuleFilterChange}
              >
                <option value="">Todos os Módulos</option>
                {modules.map(module => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </FilterSelect>
            </div>
            
            <Button onClick={handleAddLesson}>Adicionar Nova Aula</Button>
          </ActionBar>
          
          <LessonsList>
            {filteredLessons.length > 0 ? (
              filteredLessons.map(lesson => (
                // Modify the LessonCard component to safely access properties
                <LessonCard key={lesson.id}>
                  <LessonInfo>
                    <LessonTitle>{lesson.title}</LessonTitle>
                    <LessonDescription>{lesson.description}</LessonDescription>
                    <LessonMeta>
                      <span>Módulo: {lesson.moduleName}</span>
                      <span>Ordem: {lesson.order}</span>
                      {lesson.duration && <span>Duração: {lesson.duration}</span>}
                      <span>
                        {((lesson.files && lesson.files.length) || 0) + ((lesson.audios && lesson.audios.length) || 0)} recursos
                      </span>
                    </LessonMeta>
                  </LessonInfo>
                  
                  <LessonActions>
                    <Button 
                      variant="outline" 
                      size="small" 
                      onClick={() => handleEditLesson(lesson)}
                    >
                      Editar
                    </Button>
                    <Button 
                      variant="text" 
                      size="small" 
                      onClick={() => handleDeleteLesson(lesson.id)}
                    >
                      Excluir
                    </Button>
                  </LessonActions>
                </LessonCard>
              ))
            ) : (
              <p>Nenhuma aula encontrada.</p>
            )}
          </LessonsList>
        </>
      )}
    </LessonsContainer>
  );
}

export default Lessons;