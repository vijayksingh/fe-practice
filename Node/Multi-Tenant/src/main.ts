import { env } from "./confg/env";
import { db } from "./db";
import { logger } from "./utils/logger";
import { buildServer } from "./utils/server";
import { migrate } from "drizzle-orm/node-postgres/migrator";

async function gracefulShutdown({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });

  await migrate( db , {
    migrationsFolder: "./migrations",
  });

  logger.info("Server is running");

  const signals = ["SIGINT", "SIGTERM"];


  for (let signal of signals) {
    process.on(signal, () => gracefulShutdown({ app }));
  }
}

main();
