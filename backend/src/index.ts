import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "@/routes/teamRoutes.js";

const fastify = Fastify({
  logger: true,
});

async function registerRoutes() {
  await fastify.register(teamRoutes, { prefix: "/api/teams" });
}

// Démarrage du serveur
async function start() {
  try {
    await fastify.register(cors, {
      origin: true,
    });

    await registerRoutes();

    await fastify.listen({
      port: 3000,
      host: "0.0.0.0",
    });

    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
