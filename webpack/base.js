const path = require("path");
const nodeExternals = require("webpack-node-externals");

const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
};

exports.clientBaseConfig = {
  resolve,
  entry: path.join(__dirname, "../src/client/index"),
};

exports.serverBaseConfig = {
  target: "node",
  resolve,
  externals: [nodeExternals()],
  entry: path.join(__dirname, "../src/server/index"),
};

exports.localIdentName = "[hash:base64:5]";
exports.staticAssetsPath = "assets/static";
exports.include = path.resolve(__dirname, "../src");
