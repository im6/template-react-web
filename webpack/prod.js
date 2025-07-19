const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CompressionPlugin = require('compression-webpack-plugin');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const {
  clientBaseConfig,
  serverBaseConfig,
  localIdentName,
  include,
} = require("./base");

const prodBase = {
  mode: "production",
};

const client = Object.assign(clientBaseConfig, prodBase, {
  output: {
    // publicPath: '//dkny.oss-cn-hangzhou.aliyuncs.com/2/',
    path: path.join(__dirname, "../dist/public"),
    filename: "[name].js?[contenthash]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new OptimizeCssAssetsPlugin(),
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
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
});

const server = Object.assign(serverBaseConfig, prodBase, {
  output: {
    path: path.join(__dirname, "../dist/server"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.lastBuildDate": JSON.stringify(
        `${new Date().toLocaleString()} EST`
      ),
    }),
  ],
});

module.exports = [client, server];
