import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  app.get("/", (_request, reply) => reply.send("It works!"));
}
