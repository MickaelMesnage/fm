import { FastifyInstance } from "fastify";
import {
  createTeamSchema,
  CreateTeamUseCase,
} from "@/application/usecases/team/createTeamUseCase.js";
import { GetTeamsUseCase } from "@/application/usecases/team/getTeamsUseCase.js";
import { services } from "@/initServices.js";
import { ValidationError } from "@/routes/utils.js";

const createTeamUseCase = new CreateTeamUseCase({ services });
const getTeamsUseCase = new GetTeamsUseCase({ services });

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.post("/", async (request, reply) => {
    try {
      const { success, data, error } = createTeamSchema.safeParse(request.body);
      if (!success) {
        throw new ValidationError(error.message);
      }
      const team = await createTeamUseCase.execute(data);
      return reply.code(201).send(team);
    } catch (error) {
      if (error instanceof ValidationError) {
        return reply.code(400).send({ message: error.message });
      }
      if (error instanceof Error) {
        return reply.code(500).send({ message: error.message });
      }
      return reply.code(500).send({ message: "Internal server error" });
    }
  });

  fastify.get("/", async (_request, reply) => {
    const teams = await getTeamsUseCase.execute();
    return reply.send(teams);
  });
}
