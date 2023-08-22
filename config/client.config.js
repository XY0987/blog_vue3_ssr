let path = require("path");
let { DefinePlugin } = require("webpack");
let { merge } = require("webpack-merge");
let baseConfig = require("./base.config");
module.exports = merge(baseConfig, {
  target: "web", //fs path
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});
