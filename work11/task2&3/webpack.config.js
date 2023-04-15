const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const testPlugins = require("./plugins/testPlugins")

module.exports = {
  entry: "./src/index.js", // 将src下index.js作为入口
  output: {
    path: path.resolve(__dirname, "dist"), // 输出文件加路径，根目录下/dist
    filename: "bundle.js",
    clean: true, // 自动清理上一次的文件
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "开发简易loader",
      template: path.join(__dirname, "./public/index.html"),
    }),
    new testPlugins(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "./loader/replaceLoader.js"),
            options: {
              name: "administrator",
            },
          },
        ],
      },
    ],
  },
};
