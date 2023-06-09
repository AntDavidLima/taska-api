import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { TaskServiceFactory } from "../factories/TaskServiceFactory.js";

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

  static async index(_request: FastifyRequest, reply: FastifyReply) {
    const taskService = TaskServiceFactory.make();

    const tasks = await taskService.index();

    return reply.status(200).send(tasks);
  }

  static async update(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    });

    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const body = bodySchema.parse(request.body);
    const { id } = paramsSchema.parse(request.params);

    const taskService = TaskServiceFactory.make();

    const task = await taskService.update(id, body);

    return reply.status(200).send(task);
  }

  static async destroy(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    const taskService = TaskServiceFactory.make();

    const task = await taskService.destroy(id);

    return reply.status(200).send(task);
  }
}
