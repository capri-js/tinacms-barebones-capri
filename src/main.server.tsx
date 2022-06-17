import "./tina/fetchPolyfill";
import { RenderFunction, renderToString } from "@capri-js/react";
import { StrictMode } from "react";
import { StaticRouter } from "react-router-dom/server.js";

import { App } from "./App";

export const render: RenderFunction = async (url: string) => {
  if (url === "/admin") {
    // On the server the /admin page is empty as it is an SPA:
    return { "#root": "" };
  }
  return {
    "#root": await renderToString(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>
    ),
  };
};
