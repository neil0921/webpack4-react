const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackCommon, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name][chunkhash:8].js",
    chunkFilename: "[name][chunkhash:8].chunk.js",
    publicPath: "/qoe/"
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(__dirname, '../src'),
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            limit: 1024 * 10,
            outputPath:"static",
            publicPath:"qoe/static/",
            name: "[name][hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name][contenthash:8].css",
      chunkFilename: "[id][contenthash:8].css",
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./src/assets/favicon.ico"
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({ sourceMap: true }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          preset:['default',{discardComments:{removeAll:true}}]
        },
        canPrint: true
      })
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 80 * 1024,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: function(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor_${packageName.replace("@", "")}`
          }
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
});