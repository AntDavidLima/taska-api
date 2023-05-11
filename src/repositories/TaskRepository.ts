import { Prisma, PrismaClient } from "@prisma/client";

export class TaskRepository {
  private prisma = new PrismaClient();

  async save(task: Prisma.TaskCreateInput) {
    return await this.prisma.task.create({
      data: task,
    });
  }
}
