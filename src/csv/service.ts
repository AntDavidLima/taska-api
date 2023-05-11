import { parse } from "csv-parse";
import { createReadStream } from "fs";

const parser = parse({
  delimiter: ",",
  from_line: 2,
});

const csvStream = createReadStream(new URL("./tasks.csv", import.meta.url));

const parsedCsvLinesStream = csvStream.pipe(parser);

for await (const chunck of parsedCsvLinesStream) {
  const [title, description] = chunck;

  await fetch("http://localhost:3333/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });
}
