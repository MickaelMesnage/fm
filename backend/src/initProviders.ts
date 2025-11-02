import { EmailProvider } from "./infrastructure/providers/emailProvider";
import { TeamRepository } from "./infrastructure/repositories/teamRepository";

const initProviders = () => {
  return {
    emailProvider: new EmailProvider(),
  };
};

export type Providers = ReturnType<typeof initProviders>;

export const providers = initProviders();
