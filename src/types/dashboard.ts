export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  color: string;
}

export interface ApplicationMetric {
  month: string;
  applications: number;
  deployments: number;
}