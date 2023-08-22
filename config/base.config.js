let { VueLoaderPlugin } = require("vue-loader/dist/index");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    // 添加的后缀，项目中导包就不需要编写文件后缀
    extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
  },
};
