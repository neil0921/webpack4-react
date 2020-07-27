const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');

const server = new webpackDevServer(webpack(webpackConfig), webpackConfig.devServer);

server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000');
})