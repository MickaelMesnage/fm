import { TeamEntity, TeamEntityProps } from "@fm/domain";
import type { TeamRepository } from "../infrastructure/repositories/teamRepository";
import { Repositories } from "../initRepositories";
import { v4 as uuidv4 } from "uuid";

export class TeamService {
  private teamRepository: TeamRepository;

  constructor({
    repositories,
  }: {
    repositories: Pick<Repositories, "teamRepository">;
  }) {
    this.teamRepository = repositories.teamRepository;
  }

  async createTeam(
    teamToCreate: Omit<TeamEntityProps, "id">
  ): Promise<TeamEntity> {
    const teamToCreateEntity = new TeamEntity({
      ...teamToCreate,
      id: uuidv4(),
    });
    return this.teamRepository.create(teamToCreateEntity);
  }

  async getAllTeams(): Promise<TeamEntity[]> {
    return this.teamRepository.findAll();
  }

  async getTeamById(id: string): Promise<TeamEntity | undefined> {
    return this.teamRepository.findById(id);
  }
}
