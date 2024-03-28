import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue"],
      resolvers: [],
      dirs: ["./composables/**", "./components/**/*"],
      vueTemplate: true
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dirs: ["src/components", "src/pages/**/components"],
      dts: "src/components.d.ts",
      resolvers: []
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
