import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { TaskServiceFactory } from "../factories/TaskServiceFactory.js";

export class CompleteTaskController {
  static async complete(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    const taskService = TaskServiceFactory.make();

    const task = await taskService.update(id, {
      completedAt: new Date(),
    });

    return reply.status(200).send(task);
  }
}
