/* eslint-disable */
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ["es2015", "stage-1", "react"]
      },
      include: [
        path.join(__dirname, '/src'),
        path.join(__dirname, 'node_modules/slds-for-react'),
        path.join(__dirname, 'node_modules/slds-for-js-core')
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};