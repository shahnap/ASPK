import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      screens: '/src/screens',
      components: '/src/components',
    }
  }
});
