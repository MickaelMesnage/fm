import type { Team } from '@fm/domain';

const API_URL = 'http://localhost:3000';

export const teamApi = {
  getTeams: async (): Promise<Team[]> => {
    const response = await fetch(`${API_URL}/teams`);
    if (!response.ok) throw new Error('Failed to fetch teams');
    return response.json();
  },

  createTeam: async (team: Omit<Team, 'id'>): Promise<Team> => {
    const response = await fetch(`${API_URL}/teams`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(team),
    });
    if (!response.ok) throw new Error('Failed to create team');
    return response.json();
  },
};

