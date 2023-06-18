## Steps
 
### Bootstrap your application

- Setup your fastify server
- Setup logger
- Setup your environment variables
- Setup graceful shutdown
- Key takeaways `{ Fastify, Logger, Environment variables, Graceful shutdown }`

### Setup DB
- Create an account on Neon (Postgres as a Service)
- Create an env variable for DB connection
- Setup a DB server in `db/index.ts`
- Define schema for your tables `db/schema.ts`
- Define a migrations script in `package.json`
- Run the migrations script
- It will create a migration
- Key takeaways `{ DB, Migrations, Schema configuration }`

### SETUP SCHEMA
- Create Applications schema
- Create USER schema
- Create Roles schema
- Key takeaways `{ Composite Primary Key, Index, Refrences, Relations between tables }` 

### Create Modules

**Applications**
- Create a module for applications
  - Crate applications routes
  - Create applications controller
  - Create applications service
  - Create applications schema

- Register the routes in `server.ts`

- Create createApplication service in `applications.service.ts`
- Create getApplications service in `applications.service.ts`
- Create schema for applications in `applications.schema.ts`

**Roles**

- Create default roles in `permissions.ts`
- We are going to default roles for SUPER_ADMIN and USER


