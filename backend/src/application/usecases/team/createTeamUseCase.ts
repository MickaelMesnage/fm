import { TeamEntity, teamEntityPropsSchema } from "@fm/domain";
import { TeamService } from "../../../services/teamService";
import { Services } from "../../../initServices";
import { z } from "zod";

export const createTeamSchema = z.object({
  data: teamEntityPropsSchema.omit({ id: true }),
});

type CreateTeamDTO = z.infer<typeof createTeamSchema>;

export class CreateTeamUseCase {
  private teamService: TeamService;

  constructor({ services }: { services: Pick<Services, "teamService"> }) {
    this.teamService = services.teamService;
  }

  async execute({ data }: CreateTeamDTO): Promise<TeamEntity> {
    const createdTeam = await this.teamService.createTeam(data);
    return createdTeam;
  }
}
