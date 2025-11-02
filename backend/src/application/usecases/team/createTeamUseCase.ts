import { TeamService } from "@/services/teamService.js";
import { Services } from "@/initServices.js";
import { z } from "zod";
import {
  TeamEntity,
  teamEntityPropsSchema,
} from "@/domain/entities/TeamEntity.js";

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
