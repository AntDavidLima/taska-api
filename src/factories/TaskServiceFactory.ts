import { TaskRepository } from "@/repositories/TaskRepository";
import { TaskService } from "@/services/TaskService";

export class TaskServiceFactory {
  static make() {
    const taskRepository = new TaskRepository();
    const taskService = new TaskService(taskRepository);

    return taskService;
  }
}
