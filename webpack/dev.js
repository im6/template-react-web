const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServerStartPlugin = require("./plugins/ServerStartPlugin");

const {
  clientBaseConfig,
  serverBaseConfig,
  localIdentName,
  staticAssetsPath,
  include,
} = require("./base");

const devBase = {
  watch: true,
  mode: "development",
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/,
  },
};

const client = Object.assign(clientBaseConfig, devBase, {
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        vendors: false,
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
        test: /\.jsx?$/,
        include,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-syntax-dynamic-import"],
            },
          },
        ],
      },

      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName,
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});

const server = Object.assign(serverBaseConfig, devBase, {
  output: {
    path: path.join(__dirname, "../local/server"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        use: ["babel-loader"],
      },
      {
        test: /\.less$/,
        include,
        use: [
          {
            loader: "css-loader",
            options: {
              onlyLocals: true,
              modules: {
                localIdentName,
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ServerStartPlugin("./local/server")],
});

module.exports = [client, server];
