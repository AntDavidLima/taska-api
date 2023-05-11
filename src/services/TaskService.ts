import { TaskRepository } from "@/repositories/TaskRepository";
import { Prisma } from "@prisma/client";

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async save(task: Prisma.TaskCreateInput) {
    return await this.taskRepository.save(task);
  }

  async index() {
    return await this.taskRepository.index();
  }
}
