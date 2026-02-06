import axios from "axios";
import { redis } from "../config/redis";

export class OAuthService {
  static async getToken() {
    const cached = await redis.get("oauth_token");

    if (cached) return cached;

    const res = await axios.post(process.env.OAUTH_URL!, {
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      grant_type: "client_credentials",
    });

    await redis.set("oauth_token", res.data.access_token, "EX", 3600);

    return res.data.access_token;
  }
}
