import { FastifyInstance } from "fastify";
import { TaskController } from "./controllers/TaskController";

export async function routes(app: FastifyInstance) {
  app.post("/tasks", TaskController.save);
  app.get("/tasks", TaskController.index);
  app.put("/tasks/:id", TaskController.update);
}
