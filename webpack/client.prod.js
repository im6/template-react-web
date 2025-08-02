const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
// const CompressionPlugin = require('compression-webpack-plugin');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { clientBaseConfig } = require("./base");

const prodBase = {
  mode: "production",
};

const client = Object.assign(clientBaseConfig, prodBase, {
  output: {
    clean: true,
    publicPath: "/public/",
    // publicPath: '//dkny.oss-cn-hangzhou.aliyuncs.com/2/',
    path: path.join(__dirname, "../dist/public"),
    filename: "[name].bundle.[contenthash].js",
    chunkFilename: "[name].chunk.[contenthash].js",
  },
  plugins: [
    // new CompressionPlugin({
    //   filename: '[path]',
    //   minRatio: 1,
    // }),

    new CopyPlugin({
      patterns: [{ from: "static", to: "./" }],
    }),
    new webpack.DefinePlugin({
      "process.env.lastBuildDate": JSON.stringify(
        `${new Date().toLocaleString()} UTC`
      ),
    }),
    new WebpackManifestPlugin({
      fileName: path.join(__dirname, "../dist/server/manifest.json"),
      publicPath: "",
    }),
  ],
});

module.exports = client;
