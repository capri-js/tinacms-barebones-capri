import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { TinaAdmin } from "tinacms";
import {TinaDynamicProvider} from "./components/tina/TinaDynamicProvider"
import { Home } from "./Home";

const isAdmin = window && window.location.pathname === "/admin";
const content = isAdmin ? <TinaAdmin /> : <Home />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TinaDynamicProvider>{content}</TinaDynamicProvider>
  </StrictMode>
);
