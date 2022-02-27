const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
  {
    mode: 'development',

    devtool: 'cheap-module-source-map',

    devServer: {
      port: 8081,
      historyApiFallback: true,
      hot: true,
    },

    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, './.env.development'),
      }),
    ],
  },
  common,
);
