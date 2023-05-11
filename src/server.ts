import { app } from "./app.ts";

app
  .listen({
    host: "0.0.0.0",
    port: 3333,
  })
  .then(() => console.log("Server running!"))
  .catch((error) => console.log("Could not start the server!", error.message));
