import { Prisma, PrismaClient } from "@prisma/client";

export class TaskRepository {
  private prisma = new PrismaClient();

  async create(task: Prisma.TaskCreateInput) {
    return await this.prisma.task.create({
      data: task,
    });
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async update(id: number, task: Prisma.TaskUpdateInput) {
    return await this.prisma.task.update({
      data: task,
      where: { id },
    });
  }

  async findById(id: number) {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async delete(id: number) {
    return await this.prisma.task.delete({
      where: { id },
    });
  }
}
