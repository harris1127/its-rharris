const path = require('path');

module.exports = {
  entry: './app/webpack-app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    devtool: 'inline-source-map'
};