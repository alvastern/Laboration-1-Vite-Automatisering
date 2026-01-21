import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                images: resolve(__dirname, "images.html"),
                process: resolve(__dirname, "process.html")
            }
        }
    }
});