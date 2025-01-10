import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./environment",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
});