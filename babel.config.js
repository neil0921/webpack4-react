module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        "modules": false,// 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        "useBuiltIns": "usage", //usage:按需注⼊// entry:browserslist环境不支持的所有垫片都导入
        "corejs":  3//新版本需要指定核⼼库版本
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", {"legacy": true}],//使用旧式类装饰器 必须在properties前 使用legacy: true模式时必须在loose模式下使用
    ["@babel/plugin-proposal-class-properties", {"loose": true}],//适应JavaScript的一些新特性 将编译类属性以使用赋值表达式
    "react-hot-loader/babel",//使用react-hot-loader来支持React的热更新
    ["import", {"libraryName": "antd", "libraryDirectory": "es", "style": true}]//babel-plugin-import 用来按需引入 antd 的组件
  ]
};
