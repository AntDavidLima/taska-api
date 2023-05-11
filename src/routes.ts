import { FastifyInstance } from "fastify";
import { TaskController } from "./controllers/TaskController.ts";
import { CompleteTaskController } from "./controllers/CompleteTaskController.ts";

export async function routes(app: FastifyInstance) {
  app.post("/tasks", TaskController.save);
  app.get("/tasks", TaskController.index);
  app.put("/tasks/:id", TaskController.update);
  app.delete("/tasks/:id", TaskController.destroy);

  app.patch("/tasks/:id/complete", CompleteTaskController.complete);
}
