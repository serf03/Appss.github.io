import { config as dotenv } from "dotenv";

dotenv();
export const dbSettings = {
  user: process.env.DbUser,
  password: process.env.DbPassword,
  server: process.env.DbServer,
  database: process.env.DbDatabase,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
