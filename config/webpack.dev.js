const path = require('path');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackCommon,{
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name][hash:8].js",
    publicPath: "/"
  },
  devServer: {
    // port: 8080,
    // overlay: {
    //   errors: true
    // },
    // proxy: {
    //   "/api": "http://localhost:8080"
    // },
    // contentBase: path.join(__dirname, "../dist"),
    open: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback:true// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  },
  module: {
    rules: [
      {
        test:/\.less$/,
        use:["style-loader","css-loader","postcss-loader","less-loader"]
      },
      {
        test:/\.(png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)$/,
        use:"file-loader"
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./public/index.html",
      favicon:"./src/assets/favicon.ico"
    })
  ]
});