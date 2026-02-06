import { ENV } from "./env";

export const oauthConfig = {
  tokenUrl: ENV.OAUTH.URL,
  clientId: ENV.OAUTH.CLIENT_ID,
  clientSecret: ENV.OAUTH.CLIENT_SECRET
};
