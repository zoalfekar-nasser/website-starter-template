// vite.config.js

import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";
import stylelint from "vite-plugin-stylelint";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  // Specifies the project root. Essential for Vite to understand the folder structure.
  root: resolve(__dirname, "src/"),

  // Specifies the server base. '/' means the server starts at the project root.
  // This is crucial for resolving paths correctly in both dev and prod.
  base: "/",

  // Build-specific options.
  build: {
    // The output directory for the final production files.
    outDir: "../dist",
    // Clears the output directory before each build. Good practice.
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Defines the entry point of the application.
        home: resolve(__dirname, "src/index.html"),

        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },

  // The plugins array.

  plugins: [
    htmlPurge({
      paths: ["./src/**/*.{html,js,vue,jsx,tsx}"],
      safelist: {
        // Or use greedy matching for more comprehensive coverage
        greedy: [/where/],
      },
    }),

    createHtmlPlugin({
      minify: true,
    }),

    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),

    stylelint({ fix: true }),
  ],
});
