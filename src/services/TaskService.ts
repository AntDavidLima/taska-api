import { ResourceNotFoundError } from "@/errors/ResourceNotFoundError";
import { TaskRepository } from "@/repositories/TaskRepository";
import { Prisma } from "@prisma/client";

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async save(task: Prisma.TaskCreateInput) {
    return await this.taskRepository.create(task);
  }

  async index() {
    return await this.taskRepository.findAll();
  }

  async update(id: number, task: Prisma.TaskUpdateInput) {
    const taskExists = await this.taskRepository.findById(id);

    if (!taskExists) {
      throw new ResourceNotFoundError("Task not found");
    }

    return await this.taskRepository.update(id, task);
  }

  async destroy(id: number) {
    const taskExists = await this.taskRepository.findById(id);

    if (!taskExists) {
      throw new ResourceNotFoundError("Task not found");
    }

    return await this.taskRepository.delete(id);
  }
}
