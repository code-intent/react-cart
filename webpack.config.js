var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: path.join(__dirname, 'app'), loader: 'babel-loader', query: {stage: 0}},
      {test: path.join(__dirname, 'app/style'), loader: 'style-loader!css-loader'},
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
