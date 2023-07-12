import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/home",
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5001",
      },
    },
  },
});
