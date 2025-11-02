import type { Sport } from "../types/sports";

// DTO pour créer une équipe
export type CreateTeamDto = {
  name: string;
  sport: Sport;
};

// DTO pour réponse API
export type TeamDto = {
  id: string;
  name: string;
  sport: Sport;
};

// DTO pour update (tous optionnels sauf id)
export type UpdateTeamDto = {
  id: string;
  name?: string;
  sport?: Sport;
};
