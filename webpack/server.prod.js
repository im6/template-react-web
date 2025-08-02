const path = require("path");
const webpack = require("webpack");
// const CompressionPlugin = require('compression-webpack-plugin');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { prodBase, serverBaseConfig } = require("./base");

const server = Object.assign(serverBaseConfig, prodBase, {
  output: {
    clean: true,
    path: path.join(__dirname, "../dist/server"),
    filename: "index.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.lastBuildDate": JSON.stringify(
        `${new Date().toLocaleString()} EST`
      ),
    }),
  ],
});

module.exports = server;
