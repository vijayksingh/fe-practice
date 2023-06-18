import { InferModel } from "drizzle-orm";
import { db } from "../../db";
import { application } from "../../db/schema";

export async function createApplication(data: InferModel<typeof application, 'insert'>) {
  const result = await db.insert(application).values(data).returning()

  return result[0]
}

export async function getApplications() {
  // SELECT * FROM application
  // SELECT id, name, createdAt FROM application
  const result = await db.select({
    id: application.id,
    name: application.name,
    createdAt: application.createdAt,
  }).from(application).execute()

  return result
}