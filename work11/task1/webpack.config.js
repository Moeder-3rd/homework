const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { fileURLToPath } = require("url");
module.exports = {
  entry:{ 
    log:"./src/index.js", // 将src下index.js作为入口
    homepage:"./src/js/homepage.js",
    password:"./src/js/password.js",
    collection:"./src/js/collection.js",
    individual:"./src/js/individual.js",
    answer:"./src/js/answer.js",
    preview:"./src/js/preview.js",
    passage:"./src/js/passage.js",
  } ,
      plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: path.join(__dirname, './src/css/main/main-homepage/main-homepage.html'),
            chunks: ['homepage'],
            filename:"homepage.html"
        }),
        new HtmlWebpackPlugin({
            title: '密码',
            template: path.join(__dirname, './src/css/main/main-password/main-password.html'),
            chunks: ['password'],
            filename:"password.html"

        }), 
        new HtmlWebpackPlugin({
            title: '收藏',
            template: path.join(__dirname, './src/css/main/main-collection/main-collection.html'),
            chunks:['collection'],
            filename:"collection.html"
        }),
        new HtmlWebpackPlugin({
            title: '个人信息',
            template: path.join(__dirname, './src/css/main/main-individual/main-individual.html'),
            chunks:['individual'],
            filename:"individual.html"
            
        }),
        new HtmlWebpackPlugin({
            title: '回答问题',
            template: path.join(__dirname, './src/css/main/main-answer/main-answer.html'),
            chunks:['answer'],
            filename:"answer.html"
        }),
        new HtmlWebpackPlugin({
            title: '预览',
            template: path.join(__dirname, './src/css/main/main-passage/preview.html'),
            chunks:['preview'],
            filename:"preview.html"
        }),
        new HtmlWebpackPlugin({
            title: '文章',
            template: path.join(__dirname, './src/css/main/main-passage/main-passage.html'),
            chunks:['passage'],
            filename:"passage.html"
            
        }),
        new HtmlWebpackPlugin({
          title: '登录',
          template: path.join(__dirname, './log.html'),
          chunks:['log'],
          filename:"log.html"
      }),
    ],
  output: {
    path: path.resolve(__dirname, "dist"), // 输出文件加路径，根目录下/dist
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 使用正则表达式匹配.css为后缀的文件
        use: ["style-loader", "css-loader"], // 使用这两个loader，loader的顺序使从右到左，从下到上，依次转译源码
      },
    ],
  },
};
