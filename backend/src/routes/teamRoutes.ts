// src/routes/user.ts
import { Team } from "@prisma/client";
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { CreateTeamUseCase } from "../application/usecases/team/CreateTeamUseCase";
import { GetTeamsUseCase } from "../application/usecases/team/GetTeamsUseCase";
import { services } from "../initServices";
import { ValidationError } from "@fm/domain/src/errors";

const createTeamUseCase = new CreateTeamUseCase({ services });
const getTeamsUseCase = new GetTeamsUseCase({ services });

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.post("/", async (request, reply) => {
    try {
      const team = await createTeamUseCase.execute(request.body);
      return reply.code(201).send(team);
    } catch (error) {
      console.log(error);
      if (error instanceof ValidationError) {
        return reply.code(400).send({ message: error.message });
      }
      return reply.code(500).send({ message: "Internal server error" });
    }
  });

  fastify.get("/", async (request, reply) => {
    const teams = await getTeamsUseCase.execute();
    return reply.send(teams);
  });
}
