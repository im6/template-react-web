/* eslint no-console: 0 */
import server from "./server";
import { PORT } from "../constant";

const start = async () => {
  try {
    await server.listen({ port: PORT });
    console.log(
      `fastify server (mode: ${process.env.NODE_ENV}) is running on: http://localhost:${PORT}`
    );
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
