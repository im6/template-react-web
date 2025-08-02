const path = require("path");
const nodeExternals = require("webpack-node-externals");

const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
};
const include = path.resolve(__dirname, "../src");

exports.devBase = {
  mode: "development",
  devtool: "inline-source-map",
};

exports.prodBase = {
  mode: "production",
};

exports.clientBaseConfig = {
  resolve,
  entry: {
    main: path.join(__dirname, "../src/client/main/index"),
    login: path.join(__dirname, "../src/client/login/index"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.json",
            },
          },
        ],
      },
    ],
  },
};

exports.serverBaseConfig = {
  target: "node",
  resolve,
  externals: [nodeExternals()],
  entry: path.join(__dirname, "../src/server/index"),
  optimization: {
    splitChunks: false,
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
};

exports.localIdentName = "[hash:base64:5]";
exports.staticAssetsPath = "assets/static";
