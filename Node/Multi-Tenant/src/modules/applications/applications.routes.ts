import { FastifyInstance } from "fastify";
import { createApplicationJsonSchema } from "./applications.schemas";
import { createApplicationHandler } from "./applications.controllers";

export async function applicationRoutes(app: FastifyInstance) {
  app.post("/", {schema: createApplicationJsonSchema}, createApplicationHandler)

  app.get("/", () => {})
}