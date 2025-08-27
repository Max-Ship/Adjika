import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig(({ command }) => {
  return {
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              "> 1%",
              "last 4 versions",
              "not dead",
              "Firefox ESR",
              "iOS >= 12",
              "Chrome >= 60",
              "Safari >= 11",
              "Edge >= 16",
            ],
            grid: true,
            flexbox: "no-2009",
          }),
        ],
      },
    },
    base: "/Adjika/",
    build: {
      target: "es2015",
      minify: "esbuild",
      sourcemap: false,
      cssCodeSplit: false,
      assetsDir: "assets",
      rollupOptions: {
        output: {
          manualChunks: () => "index.js",
        },
      },
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
