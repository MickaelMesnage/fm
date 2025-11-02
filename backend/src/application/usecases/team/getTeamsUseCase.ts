import { TeamService } from "../../../services/teamService.js";
import { Services } from "../../../initServices.js";
import { TeamEntity } from "../../../domain/entities/TeamEntity.js";

export class GetTeamsUseCase {
  private teamService: TeamService;

  constructor({ services }: { services: Pick<Services, "teamService"> }) {
    this.teamService = services.teamService;
  }

  async execute(): Promise<TeamEntity[]> {
    return this.teamService.getAllTeams();
  }
}
