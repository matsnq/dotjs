import { defineConfig } from "vite";
import path from "path";

// read files directly from framework for development
export default defineConfig({
    server: {
        fs: {
            allow: [
                path.resolve(__dirname),
                            path.resolve(__dirname, "../../framework/packages/runtime")
            ]
        }
    },
    optimizeDeps: {
        exclude: ["frontend-framework"]
    },
    resolve: {
        alias: {
            "frontend-framework": path.resolve(__dirname, "../../framework/packages/runtime/src")
        }
    }
});
