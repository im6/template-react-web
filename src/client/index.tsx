import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import store from "./config/store";
import App from "../components/App/index";

hydrateRoot(
  document,
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
);
