const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

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

  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react-vendor",
          chunks: "all",
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 10,
        },
      },
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static", to: "./" }],
    }),
  ],
});

module.exports = client;
