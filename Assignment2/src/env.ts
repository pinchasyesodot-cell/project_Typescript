import "dotenv/config";
import env from "env-var";

export const envVars = {
    PORT: env.get("PORT").required().default("3000").asPortNumber(),
    MONGO_URI: env.get("MONGO_URI").required().asString(),
    NODE_ENV: env.get("NODE_ENV").required().default("development").asString(),
};