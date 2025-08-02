const path = require("path");
const ServerStartPlugin = require("./plugins/ServerStartPlugin");

const { devBase, serverBaseConfig } = require("./base");

const server = Object.assign(serverBaseConfig, devBase, {
  output: {
    path: path.join(__dirname, "../local/server"),
    filename: "index.js",
  },
  plugins: [new ServerStartPlugin("./local/server")],
});

module.exports = server;
