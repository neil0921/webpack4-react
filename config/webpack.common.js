const path = require('path');

module.exports =  {
  entry: {
    index:"./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    // 设置扩展，这样导入文件时可以省去写扩展名
    extensions: [".js", ".jsx", ".json", ".css", ".less"],
    alias: {
      '~assets': path.resolve(__dirname, "../src/assets"),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",//优先级
      //   test: /\.jsx?$/,
      //   use: "eslint-loader",
      //   exclude:/node_modules/
      // },
      {
        test: /\.(js|jsx)$/,
        use:"babel-loader",
        exclude:/node_modules/
      }
    ]
  }
};