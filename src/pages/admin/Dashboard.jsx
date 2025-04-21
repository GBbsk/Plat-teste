import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const DashboardTitle = styled.h1`
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StatTitle = styled.h3`
  margin-top: 0;
  color: #555;
  font-size: 1rem;
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const AdminMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MenuCard = styled(Link)`
  display: block;
  background-color: #fff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const MenuTitle = styled.h3`
  margin-top: 0;
  color: #007bff;
`;

const MenuDescription = styled.p`
  color: #555;
`;

// API service
// const API_URL = 'http://localhost:5000/api'; // Remove or comment out old URL
// const API_URL = import.meta.env.VITE_API_URL; // Use environment variable
const API_URL = '/api'; // Use relative path for Vercel Functions

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    modules: 0,
    lessons: 0,
    files: 0,
    audios: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Fetch modules from API using the environment variable
        const response = await fetch(`${API_URL}/modules`); 
        if (!response.ok) {
          throw new Error('Failed to fetch modules');
        }
        
        const modules = await response.json();
        
        let lessonCount = 0;
        let fileCount = 0;
        let audioCount = 0;

        modules.forEach(module => {
          if (module.lessons) {
            lessonCount += module.lessons.length;
            
            module.lessons.forEach(lesson => {
              if (lesson.files) fileCount += lesson.files.length;
              if (lesson.audios) audioCount += lesson.audios.length;
            });
          }
        });

        setStats({
          modules: modules.length,
          lessons: lessonCount,
          files: fileCount,
          audios: audioCount
        });
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Painel Administrativo</DashboardTitle>
        <Button variant="outline" onClick={handleLogout}>Sair</Button>
      </DashboardHeader>

      <StatsGrid>
        <StatCard>
          <StatTitle>Módulos</StatTitle>
          <StatValue>{stats.modules}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Aulas</StatTitle>
          <StatValue>{stats.lessons}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Arquivos</StatTitle>
          <StatValue>{stats.files}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Áudios</StatTitle>
          <StatValue>{stats.audios}</StatValue>
        </StatCard>
      </StatsGrid>

      <AdminMenu>
        <MenuCard to="/admin/modulos">
          <MenuTitle>Gerenciar Módulos</MenuTitle>
          <MenuDescription>Adicione, edite ou remova módulos do curso.</MenuDescription>
        </MenuCard>
        <MenuCard to="/admin/aulas">
          <MenuTitle>Gerenciar Aulas</MenuTitle>
          <MenuDescription>Adicione, edite ou remova aulas dos módulos.</MenuDescription>
        </MenuCard>
        <MenuCard to="/admin/arquivos">
          <MenuTitle>Gerenciar Arquivos</MenuTitle>
          <MenuDescription>Adicione, edite ou remova arquivos das aulas.</MenuDescription>
        </MenuCard>
      </AdminMenu>
    </DashboardContainer>
  );
}

export default Dashboard;