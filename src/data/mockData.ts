import { Team, ApplicationMetric } from '../types/dashboard';

export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Frontend Team',
    description: 'Responsável pelo desenvolvimento da interface do usuário',
    color: 'bg-blue-500',
    members: [
      {
        id: '1',
        name: 'Ana Silva',
        role: 'Tech Lead',
        email: 'ana.silva@company.com',
      },
      {
        id: '2',
        name: 'Carlos Santos',
        role: 'Senior Developer',
        email: 'carlos.santos@company.com',
      },
      {
        id: '3',
        name: 'Beatriz Costa',
        role: 'Mid Developer',
        email: 'beatriz.costa@company.com',
      },
    ],
  },
  {
    id: '2',
    name: 'Backend Team',
    description: 'Desenvolvimento de APIs e serviços',
    color: 'bg-green-500',
    members: [
      {
        id: '4',
        name: 'Daniel Oliveira',
        role: 'Tech Lead',
        email: 'daniel.oliveira@company.com',
      },
      {
        id: '5',
        name: 'Elena Rodriguez',
        role: 'Senior Developer',
        email: 'elena.rodriguez@company.com',
      },
    ],
  },
  {
    id: '3',
    name: 'DevOps Team',
    description: 'Infraestrutura e deployment',
    color: 'bg-purple-500',
    members: [
      {
        id: '6',
        name: 'Fernando Lima',
        role: 'DevOps Engineer',
        email: 'fernando.lima@company.com',
      },
      {
        id: '7',
        name: 'Gabriela Mendes',
        role: 'Cloud Architect',
        email: 'gabriela.mendes@company.com',
      },
      {
        id: '8',
        name: 'Hugo Pereira',
        role: 'SRE',
        email: 'hugo.pereira@company.com',
      },
    ],
  },
];

export const mockApplicationMetrics: ApplicationMetric[] = [
  { month: 'Jan', applications: 45, deployments: 12 },
  { month: 'Fev', applications: 52, deployments: 18 },
  { month: 'Mar', applications: 48, deployments: 15 },
  { month: 'Abr', applications: 61, deployments: 22 },
  { month: 'Mai', applications: 55, deployments: 19 },
  { month: 'Jun', applications: 67, deployments: 25 },
  { month: 'Jul', applications: 59, deployments: 20 },
  { month: 'Ago', applications: 73, deployments: 28 },
  { month: 'Set', applications: 66, deployments: 24 },
];