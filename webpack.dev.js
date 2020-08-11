const {merge} = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const theme = require('./src/utils/theme.js');

module.exports = merge(webpackCommon, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].[hash:8].js",
    publicPath: "/"
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    open: 'http://localhost:9000',//设置host后会默认打开host配置的ip
    clientLogLevel: 'silent',//关闭热更新console.log打印
    hot: true,
    // disableHostCheck: true,
    historyApiFallback: true// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", {
          loader: 'less-loader',
          options: {lessOptions: {'modifyVars': theme, 'javascriptEnabled': true}}//modifyVars:更改less 中的变量
        }]
      }
    ]
  }
});
