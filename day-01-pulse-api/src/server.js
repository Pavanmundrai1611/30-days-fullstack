import app from "./app.js";

const PORT = Number(process.env.PORT) || 4000;

const server = app.listen(PORT, () => {
  console.log(`pulse-api listening on http://localhost:${PORT}`);
});
