import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Ensure .wasm files (e.g. meshoptimizer / other decoders) are treated as assets
  // so the dev server and build emit them and the decoders can fetch/instantiate
  assetsInclude: ["**/*.wasm"],
});
