const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8090,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8091/remoteEntry.js",
        carts: "carts@http://localhost:8092/remoteEntry.js",
      },
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
