import { createServer } from "node:http";
import { addNote, listNotes } from "./notes.js";

const port = Number(process.env.PORT ?? 8080);

const server = createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");
  if (req.method === "GET" && req.url === "/notes") {
    res.end(JSON.stringify(listNotes()));
    return;
  }
  if (req.method === "POST" && req.url === "/notes") {
    let body = "";
    for await (const chunk of req) body += chunk;
    const { text } = JSON.parse(body || "{}");
    res.statusCode = 201;
    res.end(JSON.stringify(addNote(String(text ?? ""))));
    return;
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(port, () => {
  console.log(`orbit-notes listening on http://localhost:${port}`);
});
