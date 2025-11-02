import { TeamRepository } from "./infrastructure/repositories/teamRepository";

export const initRepositories = () => {
  return {
    teamRepository: new TeamRepository(),
  };
};

export type Repositories = ReturnType<typeof initRepositories>;

export const repositories = initRepositories();
