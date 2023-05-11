import { TaskServiceFactory } from "@/factories/TaskServiceFactory";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export class TaskController {
  static async save(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
    });

    const body = bodySchema.parse(request.body);

    const taskService = TaskServiceFactory.make();

    const task = await taskService.save(body);

    return reply.status(201).send(task);
  }
}
