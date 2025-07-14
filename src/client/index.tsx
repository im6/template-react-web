import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "../components/App/index";
import { reduxName } from "../constant";

hydrateRoot(
  document,
  <BrowserRouter>
    <App reduxName={reduxName} />
  </BrowserRouter>
);
