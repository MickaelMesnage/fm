import { TeamEntity } from "@fm/domain";
import { prisma } from "../database/prisma.js";

export class TeamRepository {
  async create(team: TeamEntity): Promise<TeamEntity> {
    const newTeam = await prisma.team.create({
      data: {
        id: team.id,
        name: team.name,
        sport: team.sport,
      },
    });

    return new TeamEntity(newTeam);
  }

  async findAll(): Promise<TeamEntity[]> {
    const teams = await prisma.team.findMany();
    return teams.map((team) => new TeamEntity(team));
  }

  async findById(id: string): Promise<TeamEntity | undefined> {
    const team = await prisma.team.findUnique({
      where: { id },
    });
    return team ? new TeamEntity(team) : undefined;
  }
}
