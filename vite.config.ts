import capri from "@capri-js/react/vite-plugin";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  define: {
    "process.platform": "'browser'",
  },
  plugins: [
    EnvironmentPlugin("all", { prefix: "TINA_" }),
    react(),
    capri({
      spa: "/admin",
    }),
  ],
});
