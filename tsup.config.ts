import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    // included
    "src",
    "src/next",
    "src/react",
    // not-included
    "!src/wrapper-fns/**",
    "!src/types/**",
    "!/src/util/**",
  ],
  dts: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  esbuildOptions(options) {
    options.external = ["react", "axios"];
  },
  external: ["react", "axios"],
});
