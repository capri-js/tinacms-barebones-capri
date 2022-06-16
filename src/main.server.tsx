import "./fetchPolyfill";
import { RenderFunction } from "@capri-js/react";
import { StrictMode } from "react";
import renderToString from "react-render-to-string";
import { default as tina } from "tinacms";
console.log(tina);

import { Home } from "./Home";

const query = `{
  page(relativePath: "home.mdx"){
    body
  }
}`;

export const render: RenderFunction = async (url: string) => {
  if (url === "/admin") {
    // On the server the /admin page is empty as it is an SPA.
    return { "#root": "" };
  }
  const variables = {};
  let data: any;
  try {
    data = await (tina as any).staticRequest({
      query,
      variables,
    });
  } catch (err) {
    console.log(err);
    // swallow errors related to document creation
  }
  return {
    "#root": await renderToString(
      <StrictMode>
        <Home staticData={data} />
      </StrictMode>
    ),
  };
};
