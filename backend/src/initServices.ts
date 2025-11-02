import { TeamService } from "./services/TeamService";
import { repositories, Repositories } from "./initRepositories";
import { providers, Providers } from "./initProviders";

const initServices = ({
  repositories,
  providers,
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
