const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8092,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
      shared: ["faker"],
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
