import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const FilesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: ${props => (props.active ? '#007bff' : 'transparent')};
  color: ${props => (props.active ? 'white' : '#007bff')};
  cursor: pointer;
  border-bottom: ${props => (props.active ? '2px solid #007bff' : 'none')};
  
  &:hover {
    background: ${props => (props.active ? '#007bff' : '#f8f9fa')};
  }
`;

const ResourcesList = styled.div`
  display: grid;
  gap: 1rem;
`;

const ResourceCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const ResourceInfo = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const ResourceDescription = styled.p`
  margin: 0.5rem 0;
  color: #555;
`;

const ResourceMeta = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: #777;
`;

const ResourceActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const FormTitle = styled.h2`
  margin-top: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormGroupOptional = styled(FormGroup)`
  label::after {
    content: ' (opcional)';
    font-weight: normal;
    font-style: italic;
    font-size: 0.9em;
    color: #777;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const TranscriptContainer = styled.div`
  margin-top: 1rem;
`;

const TranscriptTitle = styled.h4`
  margin: 0 0 1rem 0;
`;

const TranscriptItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TranscriptTime = styled.input`
  width: 100px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TranscriptText = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddTranscriptButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveTranscriptButton = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  color: #dc3545;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #a00;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  background-color: #f8d7da;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: #28a745;
  background-color: #d4edda;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

// API service
// ... existing code ...

// const API_URL = 'http://localhost:5000/api'; // Remover ou comentar a URL antiga
// const API_URL = import.meta.env.VITE_API_URL; // Usar variável de ambiente
const API_URL = '/api'; // Usar caminho relativo para Vercel Functions

// Headers de autenticação (se necessário para a API)
const authHeaders = {
  'username': 'admin',
  'password': 'admin123'
};

function Files() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editId = queryParams.get('edit');
  const lessonFilter = queryParams.get('lesson');
  const moduleFilter = queryParams.get('module');

  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [files, setFiles] = useState([]);
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState(moduleFilter || '');
  const [selectedLesson, setSelectedLesson] = useState(lessonFilter || '');
  const [activeTab, setActiveTab] = useState('files');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    lessonId: '',
    title: '',
    description: '',
    fileUrl: '',
    type: 'pdf',
    transcript: [],
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchData = async ({ sortLessons = true, editId = null } = {}) => {
    try {
      setLoading(true);
      
      // Fetch modules from API
      const response = await fetch(`${API_URL}/modules`);
      if (!response.ok) {
        const text = await response.text();
        console.error('API response error:', text);
        throw new Error(`Failed to fetch modules: ${response.status} ${response.statusText}`);
      }
      
      // Check if response is valid JSON
      let responseData;
      try {
        responseData = await response.json();
      } catch (error) {
        console.error('Invalid JSON response:', error);
        throw new Error('Server returned invalid JSON data');
      }
      
      const sortedModules = responseData;
      sortedModules.sort((a, b) => a.order - b.order);
      
      let allLessons = [];
      let allFiles = [];
      let allAudios = [];

      sortedModules.forEach(module => {
        if (module.lessons) {
          module.lessons.forEach(lesson => {
            const lessonWithModule = {
              ...lesson,
              moduleName: module.title,
              moduleId: module.id,
            };
            allLessons.push(lessonWithModule);

            if (lesson.files?.length > 0) {
              const lessonFiles = lesson.files.map(file => ({
                ...file,
                lessonId: lesson.id,
                lessonTitle: lesson.title,
                moduleId: module.id,
                moduleName: module.title,
                resourceType: 'file',
              }));
              allFiles.push(...lessonFiles);
            }

            if (lesson.audios?.length > 0) {
              const lessonAudios = lesson.audios.map(audio => ({
                ...audio,
                lessonId: lesson.id,
                lessonTitle: lesson.title,
                moduleId: module.id,
                moduleName: module.title,
                resourceType: 'audio',
              }));
              allAudios.push(...lessonAudios);
            }
          });
        }
      });

      if (sortLessons) {
        allLessons.sort((a, b) => {
          if (a.moduleId === b.moduleId) {
            return a.order - b.order;
          }
          return a.moduleId - b.moduleId;
        });
      }

      setModules(sortedModules);
      setLessons(allLessons);
      setFiles(allFiles);
      setAudios(allAudios);
      setLoading(false);

      if (editId) {
        const resource = allFiles.find(f => f.id === parseInt(editId)) ||
                        allAudios.find(a => a.id === parseInt(editId));
        if (resource) {
          setFormData({
            id: resource.id,
            lessonId: resource.lessonId.toString(),
            title: resource.title,
            description: resource.description,
            fileUrl: resource.fileUrl || resource.audioUrl,
            type: resource.resourceType === 'audio' ? 'audio' : resource.type || 'pdf',
            transcript: resource.transcript || [],
          });
          setActiveTab(resource.resourceType);
          setShowForm(true);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
      setError('Ocorreu um erro ao carregar os dados. Tente novamente.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ sortLessons: true, editId });
  }, [editId]);

  const handleAddResource = () => {
    const defaultLessonId = selectedLesson ? parseInt(selectedLesson) : '';
    setShowForm(true);
    setFormData({
      id: '',
      lessonId: defaultLessonId,
      title: '',
      description: '',
      fileUrl: '',
      type: activeTab === 'files' ? 'pdf' : 'audio',
      transcript: activeTab === 'audios' ? [{ time: 0, text: '' }] : [],
    });
    setError('');
    setSuccess('');
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setFormData({
      id: '',
      lessonId: '',
      title: '',
      description: '',
      fileUrl: '',
      type: activeTab === 'files' ? 'pdf' : 'audio',
      transcript: [],
    });
    setError('');
    navigate(`/admin/arquivos${selectedModule ? `?module=${selectedModule}` : ''}${selectedLesson ? `&lesson=${selectedLesson}` : ''}`);
  };

  // Função para converter URLs para o formato correto
  const convertUrl = (url, type) => {
    if (!url) return url;

    // Converter links do Google Drive
    if ((type === 'fileUrl' || type === 'audioUrl') && url.includes('drive.google.com/file/d/')) {
      // Extrair o ID do arquivo do Google Drive
      const match = url.match(/\/d\/([^\/\?]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }

    // Converter links do Google Drive compartilhados
    if ((type === 'fileUrl' || type === 'audioUrl') && url.includes('drive.google.com/open')) {
      // Extrair o ID do arquivo do Google Drive
      const match = url.match(/[\?&]id=([^&]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }

    // Converter links do YouTube
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

    // Converter links do Dropbox
    if ((type === 'audioUrl' || type === 'fileUrl') && url.includes('dropbox.com')) {
      // Troca o domínio
      let formatted = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      // Remove o parâmetro dl=0 ou dl=1 (tanto ?dl=0 quanto &dl=0)
      formatted = formatted.replace(/([?&]dl=\d+)/, '');
      // Remove ? ou & sobrando no final
      formatted = formatted.replace(/[?&]$/, '');
      return formatted;
    }

    return url;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Converter URLs automaticamente se for um campo de URL
    const convertedValue = (name === 'fileUrl' || name === 'videoUrl' || name === 'audioUrl') 
      ? convertUrl(value, name) 
      : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'lessonId' ? parseInt(value) || '' : convertedValue,
    }));
  };

  const handleTranscriptChange = (index, field, value) => {
    setFormData(prev => {
      const newTranscript = [...prev.transcript];
      newTranscript[index] = {
        ...newTranscript[index],
        [field]: field === 'time' ? parseFloat(value) || 0 : value,
      };
      return { ...prev, transcript: newTranscript };
    });
  };

  const handleAddTranscriptItem = () => {
    setFormData(prev => ({
      ...prev,
      transcript: [...prev.transcript, { time: 0, text: '' }],
    }));
  };

  const handleRemoveTranscriptItem = (index) => {
    setFormData(prev => ({
      ...prev,
      transcript: prev.transcript.filter((_, i) => i !== index),
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.fileUrl || !formData.lessonId) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Remover itens de transcrição vazios antes de salvar
    if (activeTab === 'audios' && formData.transcript && formData.transcript.length > 0) {
      formData.transcript = formData.transcript.filter(item => item.text.trim() !== '');
    }

    try {
      const lesson = lessons.find(l => l.id === parseInt(formData.lessonId));
      if (!lesson) {
        setError('Aula não encontrada.');
        return;
      }

      const moduleId = lesson.moduleId;
      const lessonId = lesson.id;
      
      const resourceData = {
        title: formData.title,
        description: formData.description,
        [activeTab === 'files' ? 'fileUrl' : 'audioUrl']: formData.fileUrl,
        type: activeTab === 'files' ? formData.type : undefined,
        transcript: activeTab === 'audios' ? formData.transcript : undefined,
      };

      let response;
      
      if (formData.id) {
        // Update existing resource
        const endpoint = activeTab === 'files' 
          ? `${API_URL}/files/${formData.id}`
          : `${API_URL}/audios/${formData.id}`;
          
        response = await fetch(endpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...authHeaders
          },
          body: JSON.stringify(resourceData)
        });
      } else {
        // Create new resource
        const endpoint = activeTab === 'files'
          ? `${API_URL}/modules/${moduleId}/lessons/${lessonId}/files`
          : `${API_URL}/modules/${moduleId}/lessons/${lessonId}/audios`;
          
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...authHeaders
          },
          body: JSON.stringify(resourceData)
        });
      }

      if (!response.ok) {
        throw new Error('Failed to save resource');
      }

      setSuccess(formData.id ? 'Recurso atualizado com sucesso!' : 'Recurso adicionado com sucesso!');
      setShowForm(false);
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      await fetchData();
    } catch (error) {
      console.error('Erro ao salvar o recurso:', error);
      setError('Ocorreu um erro ao salvar o recurso. Tente novamente.');
    }
  };

  const handleEditResource = (resource) => {
    setFormData({
      id: resource.id,
      lessonId: resource.lessonId.toString(),
      title: resource.title,
      description: resource.description,
      fileUrl: resource.fileUrl || resource.audioUrl,
      type: resource.resourceType === 'audio' ? 'audio' : resource.type || 'pdf',
      transcript: resource.transcript || [],
    });
    setActiveTab(resource.resourceType);
    setShowForm(true);
    navigate(`/admin/arquivos?edit=${resource.id}`);
  };

  const handleDeleteResource = async (resource) => {
    const resourceType = activeTab === 'files' ? 'files' : 'audios';
    if (!window.confirm(`Tem certeza que deseja excluir este ${resourceType === 'files' ? 'arquivo' : 'áudio'}?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/modules/${resource.lessonId}/${resourceType}/${resource.id}`, {
        method: 'DELETE',
        headers: authHeaders,
      });

      if (!response.ok) {
        throw new Error('Failed to delete resource');
      }

      setSuccess('Recurso excluído com sucesso!');
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      await fetchData();
    } catch (error) {
      console.error('Erro ao excluir o recurso:', error);
      setError('Ocorreu um erro ao excluir o recurso. Tente novamente.');
    }
  };

  const handleModuleFilterChange = (e) => {
      const moduleId = e.target.value;
      setSelectedModule(moduleId);
      
      // Always reset selected lesson when module changes
      setSelectedLesson('');
      
      // Build URL params
      const params = new URLSearchParams();
      if (moduleId) params.append('module', moduleId);
      
      navigate(`/admin/arquivos${params.toString() ? `?${params.toString()}` : ''}`);
    };

  const handleLessonFilterChange = (e) => {
    const lessonId = e.target.value;
    setSelectedLesson(lessonId);
    
    // Build URL params
    const params = new URLSearchParams();
    if (selectedModule) params.append('module', selectedModule);
    if (lessonId) params.append('lesson', lessonId);
    
    navigate(`/admin/arquivos${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData(prev => ({
      ...prev,
      type: tab === 'files' ? 'pdf' : 'audio',
      transcript: tab === 'audios' && prev.transcript.length === 0 ? [{ time: 0, text: '' }] : prev.transcript,
    }));
  };

  // Update the filtered lessons logic to properly filter by module
  const filteredLessons = lessons.filter(
    lesson => !selectedModule || String(lesson.moduleId) === String(selectedModule)
  );

  const filteredFiles = files.filter(file => {
    const matchesSearch =
      file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = !selectedModule || file.moduleId === parseInt(selectedModule);
    const matchesLesson = !selectedLesson || file.lessonId === parseInt(selectedLesson);
    return matchesSearch && matchesModule && matchesLesson;
  });

  const filteredAudios = audios.filter(audio => {
    const matchesSearch =
      audio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audio.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = !selectedModule || audio.moduleId === parseInt(selectedModule);
    const matchesLesson = !selectedLesson || audio.lessonId === parseInt(selectedLesson);
    return matchesSearch && matchesModule && matchesLesson;
  });

  if (loading) {
    return <p>Carregando recursos...</p>;
  }

  return (
    <FilesContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      {showForm ? (
        <FormContainer>
          <FormTitle>
            {formData.id
              ? activeTab === 'files'
                ? 'Editar Arquivo'
                : 'Editar Áudio'
              : activeTab === 'files'
                ? 'Adicionar Novo Arquivo'
                : 'Adicionar Novo Áudio'}
          </FormTitle>
          <TabsHeader>
            <TabButton active={activeTab === 'files'} onClick={() => handleTabChange('files')}>
              Arquivo
            </TabButton>
            <TabButton active={activeTab === 'audios'} onClick={() => handleTabChange('audios')}>
              Áudio
            </TabButton>
          </TabsHeader>
          <form onSubmit={handleSubmitForm}>
            <FormGroup>
              <Label htmlFor="lessonId">Aula *</Label>
              <FilterSelect
                id="lessonId"
                name="lessonId"
                value={formData.lessonId}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione uma aula</option>
                {filteredLessons.map(lesson => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.moduleName} - {lesson.title}
                  </option>
                ))}
              </FilterSelect>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="title">Título *</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroupOptional>
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </FormGroupOptional>
            <FormGroup>
              <Label htmlFor="fileUrl">
                {activeTab === 'files' ? 'URL do Arquivo *' : 'URL do Áudio *'}
              </Label>
              <Input
                type="text"
                id="fileUrl"
                name="fileUrl"
                value={formData.fileUrl}
                onChange={handleInputChange}
                placeholder={
                  activeTab === 'files'
                    ? 'https://www.dropbox.com/s/example/arquivo.pdf'
                    : 'https://www.dropbox.com/s/example/audio.mp3'
                }
                required
              />
            </FormGroup>
            {activeTab === 'files' && (
              <FormGroup>
                <Label htmlFor="type">Tipo de Arquivo</Label>
                <FilterSelect
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="pdf">PDF</option>
                  <option value="doc">DOC</option>
                  <option value="xls">XLS</option>
                  <option value="ppt">PPT</option>
                  <option value="zip">ZIP</option>
                  <option value="image">Imagem</option>
                  <option value="other">Outro</option>
                </FilterSelect>
              </FormGroup>
            )}
            {activeTab === 'audios' && (
              <TranscriptContainer>
                <TranscriptTitle>Transcrição do Áudio</TranscriptTitle>
                {formData.transcript.map((item, index) => (
                  <TranscriptItem key={index}>
                    <TranscriptTime
                      type="number"
                      step="0.1"
                      value={item.time}
                      onChange={e => handleTranscriptChange(index, 'time', e.target.value)}
                      placeholder="Tempo (s)"
                    />
                    <TranscriptText
                      type="text"
                      value={item.text}
                      onChange={e => handleTranscriptChange(index, 'text', e.target.value)}
                      placeholder="Texto"
                    />
                    <RemoveTranscriptButton
                      type="button"
                      onClick={() => handleRemoveTranscriptItem(index)}
                    >
                      X
                    </RemoveTranscriptButton>
                  </TranscriptItem>
                ))}
                <AddTranscriptButton type="button" onClick={handleAddTranscriptItem}>
                  + Adicionar Item
                </AddTranscriptButton>
              </TranscriptContainer>
            )}
            <FormActions>
              <Button variant="outline" type="button" onClick={handleCancelForm}>
                Cancelar
              </Button>
              <Button type="submit">{formData.id ? 'Atualizar' : 'Adicionar'}</Button>
            </FormActions>
          </form>
        </FormContainer>
      ) : (
        <>
          <TabsHeader>
            <TabButton active={activeTab === 'files'} onClick={() => setActiveTab('files')}>
              Arquivos
            </TabButton>
            <TabButton active={activeTab === 'audios'} onClick={() => setActiveTab('audios')}>
              Áudios
            </TabButton>
          </TabsHeader>
          <ActionBar>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <SearchInput
                type="text"
                placeholder={activeTab === 'files' ? 'Pesquisar arquivos...' : 'Pesquisar áudios...'}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <FilterSelect value={selectedModule} onChange={handleModuleFilterChange}>
                <option value="">Todos os Módulos</option>
                {modules.map(module => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </FilterSelect>
              <FilterSelect
                value={selectedLesson}
                onChange={handleLessonFilterChange}
                disabled={!selectedModule}
              >
                <option value="">Todas as Aulas</option>
                {filteredLessons.map(lesson => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.title}
                  </option>
                ))}
              </FilterSelect>
            </div>
            <Button onClick={handleAddResource}>
              {activeTab === 'files' ? 'Adicionar Arquivo' : 'Adicionar Áudio'}
            </Button>
          </ActionBar>
          <ResourcesList>
            {activeTab === 'files' ? (
              filteredFiles.length > 0 ? (
                filteredFiles.map(file => (
                  <ResourceCard key={file.id}>
                    <ResourceInfo>
                      <ResourceTitle>{file.title}</ResourceTitle>
                      <ResourceDescription>{file.description}</ResourceDescription>
                      <ResourceMeta>
                        <span>Módulo: {file.moduleName}</span>
                        <span>Aula: {file.lessonTitle}</span>
                        <span>Tipo: {file.type || 'pdf'}</span>
                      </ResourceMeta>
                    </ResourceInfo>
                    <ResourceActions>
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => handleEditResource(file)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleDeleteResource(file.id, 'file')}
                      >
                        Excluir
                      </Button>
                    </ResourceActions>
                  </ResourceCard>
                ))
              ) : (
                <p>Nenhum arquivo encontrado.</p>
              )
            ) : (
              filteredAudios.length > 0 ? (
                filteredAudios.map(audio => (
                  <ResourceCard key={audio.id}>
                    <ResourceInfo>
                      <ResourceTitle>{audio.title}</ResourceTitle>
                      <ResourceDescription>{audio.description}</ResourceDescription>
                      <ResourceMeta>
                        <span>Módulo: {audio.moduleName}</span>
                        <span>Aula: {audio.lessonTitle}</span>
                        <span>Transcrição: {audio.transcript ? audio.transcript.length : 0} itens</span>
                      </ResourceMeta>
                      {/* Add the audio player here */}
                      {audio.audioUrl && (
                        <audio controls style={{ marginTop: '0.5rem', width: '100%' }}>
                          <source src={audio.audioUrl} type="audio/mp3" />
                          Seu navegador não suporta o elemento de áudio.
                        </audio>
                      )}
                    </ResourceInfo>
                    <ResourceActions>
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => handleEditResource(audio)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleDeleteResource(audio.id, 'audio')}
                      >
                        Excluir
                      </Button>
                    </ResourceActions>
                  </ResourceCard>
                ))
              ) : (
                <p>Nenhum áudio encontrado.</p>
              )
            )}
          </ResourcesList>
        </>
      )}
    </FilesContainer>
  );
}

export default Files;
