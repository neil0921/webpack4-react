module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        "modules": false,// 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        "useBuiltIns": "entry", // browserslist环境不支持的所有垫片都导入
        "corejs": {
          "version": 3,
          "proposals": true,
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
      //使用旧式类装饰器 必须在properties前 使用legacy: true模式时必须在loose模式下使用
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    //适应JavaScript的一些新特性 将编译类属性以使用赋值表达式
    ["@babel/plugin-proposal-class-properties", {"loose": true}],
    "react-hot-loader/babel",
    ["import", {"libraryName": "antd","libraryDirectory": "es", "style": true}]
  ]
};