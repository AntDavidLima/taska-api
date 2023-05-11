import fastify from "fastify";

import { routes } from "./routes.ts";

export const app = fastify();

app.register(routes);
