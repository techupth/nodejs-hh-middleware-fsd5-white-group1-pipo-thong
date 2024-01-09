import fs from "fs/promises";

async function logging(req, res, next) {
  const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`;
  console.log(text);

  await fs.appendFile("logs.txt", text);

  next();
}

export default logging;
