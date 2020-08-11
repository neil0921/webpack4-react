const {merge} = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const theme = require('./src/utils/theme.js');

module.exports = merge(webpackCommon, {
  mode: "production",
  // devtool: "source-map",
  output: {
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[name].[chunkhash:8].chunk.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: 'less-loader',
            options: {lessOptions: {'modifyVars': theme, 'javascriptEnabled': true}}//modifyVars:更改less 中的变量
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].[contenthash:8].css"
    }),
    new OptimizeCssAssetsPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`// 解决：修改a文件导致b文件的contenthash变化
    },
    splitChunks: {
      chunks: "all"
    }
  }
});
