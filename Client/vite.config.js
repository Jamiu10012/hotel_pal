import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", 
    sourcemap: true, // Generate source maps for better debugging in production
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements in production
      },
    },
  },

  css: {
    modules: false, // Set to true if you want to enable CSS modules
    extract: true, // Extract CSS into a separate file in production
  },
  server: {
    port: 3000,
  },
});
