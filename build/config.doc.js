/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const resolve = (dir) => path.join(__dirname, "../", dir);

module.exports = {
  publicPath: "./",
  devServer: {
    port: "8887",
  },
  outputDir: resolve("docs"),
  pages: {
    index: {
      entry: resolve("src/main.ts"),
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch-index");
  },
};
