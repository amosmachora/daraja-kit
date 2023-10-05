import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  outDir: "dist", // Specify the output directory for your files
  esbuildOptions(options) {
    options.external = ["react", "axios"];
  },
  external: ["react", "axios"],
});
