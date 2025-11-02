import { TeamEntity } from "@fm/domain";
import type { TeamRepository } from "../../infrastructure/repositories/teamRepository";
import { Repositories } from "../../initRepositories";

export class TeamService {
  private teamRepository: TeamRepository;

  constructor({
    repositories,
  }: {
    repositories: Pick<Repositories, "teamRepository">;
  }) {
    this.teamRepository = repositories.teamRepository;
  }

  async createTeam(data: unknown): Promise<TeamEntity> {
    const team = new TeamEntity(data);
    return this.teamRepository.create(team);
  }

  async getAllTeams(): Promise<TeamEntity[]> {
    return this.teamRepository.findAll();
  }

  async getTeamById(id: string): Promise<TeamEntity | undefined> {
    return this.teamRepository.findById(id);
  }
}
