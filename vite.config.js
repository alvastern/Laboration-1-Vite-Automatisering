import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                images: resolve(__dirname, "images.html"),
                process: resolve(__dirname, "process.html")
            }
        }
    },

    plugins: [
        ViteImageOptimizer({
            webp: {
                quality: 75
            },
            svg: {
                quality: 75
            }
        })
    ]
});