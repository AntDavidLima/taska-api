import { FastifyInstance } from "fastify";
import { TaskController } from "./controllers/TaskController";
import { CompleteTaskController } from "./controllers/CompleteTaskController";

export async function routes(app: FastifyInstance) {
  app.post("/tasks", TaskController.save);
  app.get("/tasks", TaskController.index);
  app.put("/tasks/:id", TaskController.update);
  app.delete("/tasks/:id", TaskController.destroy);

  app.patch("/tasks/:id/complete", CompleteTaskController.complete);
}
