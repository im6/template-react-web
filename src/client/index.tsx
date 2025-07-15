import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "../components/App/index";
import store from "./config/store";

hydrateRoot(
  document,
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
);
