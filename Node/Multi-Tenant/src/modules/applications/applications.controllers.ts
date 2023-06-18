import { FastifyReply, FastifyRequest } from "fastify";
import { CreateApplicationBody } from "./applications.schemas";
import { createApplication } from "./applications.service";
import {
  ALL_PERMISSIONS,
  SYSTEM_ROLE,
  USER_ROLE_PERMISSIONS,
} from "../../confg/permissions";
import { createRole } from "../roles/roles.service";

export async function createApplicationHandler(
  request: FastifyRequest<{ Body: CreateApplicationBody }>,
  reply: FastifyReply
) {
  const { name } = request.body;

  const application = await createApplication({ name });

  const superAdminRolePromise = createRole({
    applicationId: application.id,
    name: SYSTEM_ROLE.SUPER_ADMIN,
    permissions: ALL_PERMISSIONS as unknown as string[],
  });

  const applicationUserRolePromise = createRole({
    applicationId: application.id,
    name: SYSTEM_ROLE.APPLICATION_USER,
    permissions: USER_ROLE_PERMISSIONS,
  });

  const [superAdminRole, applicationUserRole] = await Promise.allSettled([
    superAdminRolePromise,
    applicationUserRolePromise,
  ]);

  if (superAdminRole.status === "rejected") {
    throw new Error("Can't create super admin role");
  }

  if (applicationUserRole.status === "rejected") {
    throw new Error("Can't create application user role");
  }

  return {
    application,
    superAdminRole: superAdminRole.value,
    applicationUserRole: applicationUserRole.value,
  };
}
