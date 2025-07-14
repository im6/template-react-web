import { FastifyReply, FastifyRequest } from "fastify";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../../reducers/index";
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
  const initialState = {
    home: { value: 0 },
    demo1: { value: 0 },
    demo2: { value: 0 },
  };
  const store = configureStore({
    reducer: reducers, // Add your reducers here
    preloadedState: initialState,
  });
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App store={store} reduxName={reduxName} />
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
