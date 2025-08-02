import { FastifyReply, FastifyRequest } from "fastify";
import { renderToPipeableStream } from "react-dom/server";

import { reduxName } from "../../constant";
import AppShell from "../../components/AppShell/index";

const getMainChunkName = (url: string): string => {
  const chunkMap = {
    "/": "home",
    "/demo1": "demo1",
    "/demo2": "demo2",
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
      "/public/react-vendor.bundle.js",
      "/public/vendors.bundle.js",
      "/public/main.bundle.js",
      `/public/main.${thisChunkName}.chunk.js`,
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
  reply.send("hello login page");
};
