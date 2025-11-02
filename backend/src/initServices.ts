import { TeamService } from "@/services/teamService.js";
import { repositories, Repositories } from "@/initRepositories.js";
import { providers, Providers } from "@/initProviders.js";

const initServices = ({
  repositories,
}: {
  repositories: Repositories;
  providers: Providers;
}) => {
  return {
    teamService: new TeamService({ repositories }),
  };
};

export type Services = ReturnType<typeof initServices>;

export const services = initServices({
  repositories,
  providers,
});
