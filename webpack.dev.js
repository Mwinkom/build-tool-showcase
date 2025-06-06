const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    port: 3000,
  },
});
