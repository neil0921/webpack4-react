const { resolve } = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],// 设置扩展，这样导入文件时可以省去写扩展名
    alias: {
      '~assets': resolve(__dirname, 'src/assets'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: resolve(__dirname, 'src'),
        use: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, 'src'),
        use: [
          'thread-loader',// 开启多进程打包
          'babel-loader?cacheDirectory'//?cacheDirectory 开启babel缓存
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            outputPath: 'static',
            publicPath: '/static',
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            outputPath: 'static',
            publicPath: '/static',
            name: '[name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackBar(),//编译进度
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    })
  ],
  stats: 'errors-only'//只打印webpack错误信息
};
