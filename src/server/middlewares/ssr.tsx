import { FastifyReply, FastifyRequest } from "fastify";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import { renderToString, renderToStaticMarkup } from "react-dom/server";

// import moduleReducers from "../reducers";
// import Routes from "../routes";

// import Layout from "../../components/Layout";

import { reduxName } from "../../constant";
// import Html from "../../components/Html";
import App from "../../components/App/index";

export default (req: FastifyRequest, reply: FastifyReply) => {
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App reduxName={reduxName} />
    </StaticRouter>,
    {
      bootstrapScripts: ["/public/vendors.js", "/public/main.js"],
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
