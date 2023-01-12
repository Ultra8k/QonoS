import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath, URL } from "url";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs", "umd"],
      name: "qonos",
      fileName: "qonos",
    },
    sourcemap: true,
  },
  plugins: [dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
