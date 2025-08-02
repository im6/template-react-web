import Fastify from "fastify";
import cookie from "@fastify/cookie";
import staticPlugin from "@fastify/static";
const path = require("node:path");

import { healthCheck } from "./middlewares/api";
import { renderApp, renderLogin } from "./middlewares/ssr";
import { STATIC_URL } from "../constant";

const fastify = Fastify({
  logger: true,
});

fastify.register(staticPlugin, {
  root: path.join(process.cwd(), `${STATIC_URL}/public`),
  prefix: "/public/",
});
fastify.register(cookie, {
  secret: "my-secret",
});

fastify.get("/health", healthCheck);
fastify.get("/login", renderLogin);
fastify.get("/*", renderApp);

export default fastify;
