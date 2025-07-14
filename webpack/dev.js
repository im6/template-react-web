const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ServerStartPlugin = require("./plugins/ServerStartPlugin");

const {
  clientBaseConfig,
  serverBaseConfig,
  localIdentName,
  include,
} = require("./base");

const devBase = {
  mode: "development",
  devtool: "inline-source-map",
};

const client = Object.assign(clientBaseConfig, devBase, {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },

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
  output: {
    publicPath: "/static/",
    path: path.join(__dirname, "../local/public"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        use: [
          {
            loader: "ts-loader",
            // options: {
            //   configFile: "tsconfig.client.json",
            // },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});

const server = Object.assign(serverBaseConfig, devBase, {
  output: {
    path: path.join(__dirname, "../local/server"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            // options: {
            //   configFile: "tsconfig.server.json",
            // },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ServerStartPlugin("./local/server")],
});

module.exports = [client, server];
