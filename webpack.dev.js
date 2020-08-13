const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const theme = require('./src/utils/theme.js');

const commonCssLoader = [
  'style-loader',
  'css-loader',
  'postcss-loader'
];

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    open: 'http://localhost:9000',//设置host后会默认打开host配置的ip
    clientLogLevel: 'silent',//关闭热更新console.log打印
    hot: true,
    historyApiFallback: true// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: commonCssLoader
      },
      {
        test: /\.less$/,
        use: [
          ...commonCssLoader,
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                'modifyVars': theme,//modifyVars:更改less 中的变量
                'javascriptEnabled': true
              }
            }
          }
        ]
      }
    ]
  }
});
