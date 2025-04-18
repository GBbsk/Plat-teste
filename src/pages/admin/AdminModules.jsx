import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const ModulesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const ModulesList = styled.div`
  display: grid;
  gap: 1rem;
  
  @media (max-width: 576px) {
    gap: 0.75rem;
  }
`;

const ModuleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
`;

const ModuleInfo = styled.div`
  flex: 1;
`;

const ModuleTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const ModuleDescription = styled.p`
  margin: 0.5rem 0;
  color: #555;
`;

const ModuleMeta = styled.div`
  font-size: 0.875rem;
  color: #777;
`;

const ModuleActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  
  @media (max-width: 576px) {
    gap: 0.3rem;
  }
  
  button {
    flex: 1;
    
    @media (min-width: 768px) {
      flex: 0 1 auto;
    }
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h2`
  margin-top: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
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

const API_URL = '/api'; // Alterado para usar proxy

const authHeaders = {
  username: 'admin',
  password: 'admin123',
};

function AdminModules() {
  console.log('AdminModules.jsx atualizado, versão com lessons sanitizado');
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    order: 1,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchModules = async () => {
    try {
      setLoading(true);
      console.log('Fazendo requisição para /api/modules (AdminModules)');
      const response = await fetch(`${API_URL}/modules`);
      console.log('Status da resposta (AdminModules):', response.status);
      if (!response.ok) {
        const text = await response.text();
        console.error('Resposta inválida (AdminModules):', text);
        throw new Error('Failed to fetch modules');
      }
      const data = await response.json();
      console.log('Dados recebidos (AdminModules):', JSON.stringify(data));
      console.log('Dados são array? (AdminModules)', Array.isArray(data));
      // Garantir que todos os módulos tenham lessons
      const sanitizedData = data.map((module) => ({
        ...module,
        lessons: Array.isArray(module.lessons) ? module.lessons : [],
      }));
      sanitizedData.sort((a, b) => a.order - b.order);
      setModules(sanitizedData);
    } catch (error) {
      console.error('Erro ao carregar os módulos (AdminModules):', error);
      setError('Ocorreu um erro ao carregar os módulos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const handleAddModule = () => {
    setShowForm(true);
    setFormData({
      id: '',
      title: '',
      description: '',
      order: modules.length > 0 ? Math.max(...modules.map((m) => m.order)) + 1 : 1,
    });
    setError('');
    setSuccess('');
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setFormData({
      id: '',
      title: '',
      description: '',
      order: 1,
    });
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'order' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Only title is required now
    if (!formData.title) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const moduleData = {
        title: formData.title,
        description: formData.description, // can be empty
        order: formData.order,
        lessons: formData.id ? undefined : [],
      };

      let response;
      if (formData.id) {
        response = await fetch(`${API_URL}/modules/${formData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...authHeaders,
          },
          body: JSON.stringify(moduleData),
        });
      } else {
        response = await fetch(`${API_URL}/modules`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...authHeaders,
          },
          body: JSON.stringify(moduleData),
        });
      }

      if (!response.ok) {
        const text = await response.text();
        console.error('Erro na resposta (AdminModules):', text);
        throw new Error('Failed to save module');
      }

      setSuccess(formData.id ? 'Módulo atualizado com sucesso!' : 'Módulo adicionado com sucesso!');
      setShowForm(false);
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      await fetchModules();
    } catch (error) {
      console.error('Erro ao salvar o módulo (AdminModules):', error);
      setError('Ocorreu um erro ao salvar o módulo. Tente novamente.');
    }
  };

  const handleEditModule = (module) => {
    setFormData({
      id: module.id,
      title: module.title,
      description: module.description,
      order: module.order,
    });
    setShowForm(true);
    setError('');
    setSuccess('');
  };

  const handleDeleteModule = async (moduleId) => {
    if (!window.confirm('Tem certeza que deseja excluir este módulo? Todas as aulas, arquivos e áudios associados também serão excluídos.')) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'DELETE',
        headers: authHeaders,
      });

      if (!response.ok) {
        const text = await response.text();
        console.error('Erro na resposta (AdminModules):', text);
        throw new Error('Failed to delete module');
      }

      setSuccess('Módulo excluído com sucesso!');
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      await fetchModules();
    } catch (error) {
      console.error('Erro ao excluir o módulo (AdminModules):', error);
      setError('Ocorreu um erro ao excluir o módulo. Tente novamente.');
    }
  };

  if (loading && modules.length === 0) {
    return <p>Carregando módulos...</p>;
  }

  return (
    <ModulesContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      {showForm ? (
        <FormContainer>
          <FormTitle>
            {formData.id ? 'Editar Módulo' : 'Adicionar Novo Módulo'}
          </FormTitle>
          <form onSubmit={handleSubmitForm}>
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
            <FormGroup>
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="order">Ordem</Label>
              <Input
                type="number"
                id="order"
                name="order"
                min="1"
                value={formData.order}
                onChange={handleInputChange}
              />
            </FormGroup>
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
          <ActionBar>
            <h1>Gerenciar Módulos</h1>
            <Button onClick={handleAddModule}>Adicionar Módulo</Button>
          </ActionBar>
          <ModulesList>
            {modules.length > 0 ? (
              modules.map((module) => (
                <ModuleCard key={module.id}>
                  <ModuleInfo>
                    <ModuleTitle>{module.title}</ModuleTitle>
                    <ModuleDescription>{module.description}</ModuleDescription>
                    <ModuleMeta>
                      <span>Ordem: {module.order}</span>
                      <span> | </span>
                      <span>Aulas: {Array.isArray(module.lessons) ? module.lessons.length : 0}</span>
                    </ModuleMeta>
                  </ModuleInfo>
                  <ModuleActions>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => handleEditModule(module)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleDeleteModule(module.id)}
                    >
                      Excluir
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => navigate(`/modulos/${module.id}`)}
                    >
                      Ver
                    </Button>
                  </ModuleActions>
                </ModuleCard>
              ))
            ) : (
              <p>Nenhum módulo encontrado.</p>
            )}
          </ModulesList>
        </>
      )}
    </ModulesContainer>
  );
}

export default AdminModules;