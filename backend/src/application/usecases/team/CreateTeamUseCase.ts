import { TeamEntity } from "@fm/domain";
import { TeamService } from "../../../domain/services/TeamService";
import { Services } from "../../../initServices";

export class CreateTeamUseCase {
  private teamService: TeamService;

  constructor({ services }: { services: Pick<Services, "teamService"> }) {
    this.teamService = services.teamService;
  }

  async execute(data: unknown): Promise<TeamEntity> {
    return this.teamService.createTeam(data);
  }
}
