import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const LoginTitle = styled.h2`
  margin-top: 0;
  text-align: center;
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

const ErrorMessage = styled.p`
  color: #dc3545;
  background-color: #f8d7da;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In a real app, you would make an API call to verify credentials
      // For this example, we'll use the hardcoded credentials
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Store auth in localStorage (in a real app, you'd use a token)
        localStorage.setItem('adminAuth', JSON.stringify({
          username: formData.username,
          isAuthenticated: true
        }));
        navigate('/admin/dashboard');
      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Painel Administrativo</LoginTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Usuário</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            autoComplete="current-password"
          />
        </FormGroup>
        <FormActions>
          <Button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </FormActions>
      </form>
    </LoginContainer>
  );
}

export default Login;