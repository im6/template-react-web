import fs from "fs";
import { FastifyReply, FastifyRequest } from "fastify";
import { renderToPipeableStream } from "react-dom/server";

import { reduxName } from "../../constant";
import AppShell from "../../components/AppShell/index";
import LoginApp from "../../client/login/App/index";

const outputFolder = process.env.NODE_ENV === "development" ? "local" : "dist";
let manifest: Record<string, string> = {};
try {
  manifest = JSON.parse(
    fs.readFileSync(`./${outputFolder}/server/manifest.json`, "utf8")
  );
} catch (error) {
  console.error("Could not load manifest file:", error);
}

const getMainChunkName = (url: string): string => {
  const chunkMap = {
    "/": manifest["main.home.js"],
    "/demo1": manifest["main.demo1.js"],
    "/demo2": manifest["main.demo2.js"],
  } as const;

  // @ts-ignore
  const chunkName = chunkMap[url] || "home";
  return chunkName;
};

export const renderApp = (req: FastifyRequest, reply: FastifyReply) => {
  const isDarkModeStr = req.cookies.darkMode;
  const isDark = isDarkModeStr === "true";
  const initialState = {
    ui: { value: 1, isDark },
    demo1: { value: 2, loading: false },
    demo2: { value: 3 },
  };

  const nonce = "124";
  reply.header(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'strict-dynamic' 'nonce-${nonce}';`
  );

  const thisChunkName = getMainChunkName(req.url);
  const { pipe } = renderToPipeableStream(<AppShell isDark={isDark} />, {
    bootstrapScripts: [
      `/public/${manifest["react-vendor.js"]}`,
      `/public/${manifest["vendors.js"]}`,
      `/public/${manifest["main.js"]}`,
      `/public/${thisChunkName}`,
    ],
    bootstrapScriptContent: `window.${reduxName} = ${JSON.stringify(
      initialState
    )}`,
    onShellReady() {
      reply.header("content-type", "text/html");
      pipe(reply.raw);
    },
    onError(error: any) {
      console.error("Error during server-side rendering:", error);
      reply.status(500);
      reply.send("Internal Server Error: " + error.message);
    },
  });
};

export const renderLogin = (req: FastifyRequest, reply: FastifyReply) => {
  const isDarkModeStr = req.cookies.darkMode;
  const isDark = isDarkModeStr === "true";

  const nonce = "124";
  reply.header(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'strict-dynamic' 'nonce-${nonce}';`
  );

  const { pipe } = renderToPipeableStream(<LoginApp />, {
    bootstrapScripts: [
      `/public/${manifest["react-vendor.js"]}`,
      `/public/${manifest["vendors.js"]}`,
      `/public/${manifest["login.js"]}`,
    ],
    onShellReady() {
      reply.header("content-type", "text/html");
      pipe(reply.raw);
    },
    onError(error: any) {
      console.error("Error during server-side rendering:", error);
      reply.status(500);
      reply.send("Internal Server Error: " + error.message);
    },
  });
};
