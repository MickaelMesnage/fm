import { EmailProvider } from "./infrastructure/providers/emailProvider.js";

const initProviders = () => {
  return {
    emailProvider: new EmailProvider(),
  };
};

export type Providers = ReturnType<typeof initProviders>;

export const providers = initProviders();
