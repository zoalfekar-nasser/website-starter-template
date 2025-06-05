// Import necessary functions and plugins
import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss"; // Your plugin import

// Export a single configuration object, processed by defineConfig
export default defineConfig({
  // Root directory where your source files are located (e.g., 'src')
  root: resolve(__dirname, "src/"),

  // Build options
  build: {
    outDir: "../dist", // Output directory for built files
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        // Entry points for your HTML files (Vite builds them as separate pages)
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },

  // ✨ THIS IS WHERE YOUR PLUGINS GO ✨
  // The 'plugins' array is a property of the main Vite config object.
  plugins: [
    htmlPurge({
      // You can add options for purgecss here if needed.
      // For example, to tell it where to look for content:
      content: [
        resolve(__dirname, "src/**/*.html"), // Look in all HTML files
        resolve(__dirname, "src/**/*.js"), // Look in JS files (if you have dynamic classes)
      ],
    }),
  ],
});
