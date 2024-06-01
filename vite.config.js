import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
      screens: '/src/screens',
      components: '/src/components',
      widgets: '/src/widgets', // Ensure this matches your structure
    }
  }
});
