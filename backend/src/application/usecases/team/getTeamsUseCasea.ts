import type { TeamEntity } from "@fm/domain";
import { TeamService } from "../../../services/teamServicea";
import { Services } from "../../../initServices";

export class GetTeamsUseCase {
  private teamService: TeamService;

  constructor({ services }: { services: Pick<Services, "teamService"> }) {
    this.teamService = services.teamService;
  }

  async execute(): Promise<TeamEntity[]> {
    return this.teamService.getAllTeams();
  }
}
