const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const { clientBaseConfig, devBase } = require("./base");

const client = Object.assign(clientBaseConfig, devBase, {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    clean: true,
    publicPath: "/public/",
    path: path.join(__dirname, "../local/public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static", to: "./" }],
    }),
    new WebpackManifestPlugin({
      fileName: path.join(__dirname, "../local/server/manifest.json"),
      publicPath: "",
      writeToFileEmit: true, // Important for dev mode
    }),
  ],
});

module.exports = client;
