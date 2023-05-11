import { TaskRepository } from "../repositories/TaskRepository.js";
import { TaskService } from "../services/TaskService.js";

export class TaskServiceFactory {
  static make() {
    const taskRepository = new TaskRepository();
    const taskService = new TaskService(taskRepository);

    return taskService;
  }
}
