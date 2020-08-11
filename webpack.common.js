const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".less"],// 设置扩展，这样导入文件时可以省去写扩展名
    alias: {
      '~assets': resolve(__dirname, "src/assets"),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, 'src'),
        use: "babel-loader"
      },
      {
        test: /\.(png|jpe?g|svg|gif)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            outputPath: "static",
            publicPath: "static/",
            name: "[name].[hash:8].[ext]"
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            outputPath: "static",
            publicPath: "static/",
            name: "[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/favicon.ico"
    })
  ],
  stats: 'errors-only'
};
