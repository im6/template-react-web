import { FastifyReply, FastifyRequest } from "fastify";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { configureStore } from "@reduxjs/toolkit";

import reducers from "../../reducers/index";
import { reduxName } from "../../constant";
import App from "../../components/App/index";

export default (req: FastifyRequest, reply: FastifyReply) => {
  const initialState = {
    ui: { value: 1, isDark: false },
    demo1: { value: 2, loading: false },
    demo2: { value: 3 },
  };
  const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
  });
  const nonce = "124";
  reply.header(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'strict-dynamic' 'nonce-${nonce}';`
  );
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App store={store} />
    </StaticRouter>,
    {
      bootstrapScripts: ["/public/vendors.js", "/public/main.js"],
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
    }
  );
};
