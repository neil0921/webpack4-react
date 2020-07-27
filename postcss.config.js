module.exports = {
  plugins: [
    // 处理 @import
    // require('postcss-import')({ root: loader.resourcePath }),
    // 处理 css 中 url
    // 'postcss-url': {},
    require('autoprefixer')
  ]
};