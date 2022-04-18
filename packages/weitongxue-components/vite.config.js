import path from "path";
import { defineConfig } from "vite";
console.log('aaa');

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "weitongxue-components"),
    }
  }
})