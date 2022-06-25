import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

import { defineConfig } from "vite";

export default defineConfig(async () => {
  const { default: capri } = await import("@capri-js/react");
  return {
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
        ssrFormat: "commonjs",
      }),
    ],
  };
});
