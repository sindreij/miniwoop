var webpack = require('webpack');

var config = {
  devtool: 'source-maps',
  entry: {
    app: './src/app.js',
    test: './src/test.js',
  },
  resolve: { alias: {} },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    noParse: [],
    loaders: [
      { 
        test: /\.js$/,   
        loader: 'babel', exclude: /node_modules/,
        query: {
          'presets': ['es2015', 'stage-2', 'react'],
        }
      },
      { test: /\.json$/, loader: 'json'},
      { test: /\.png$/,  loader: "url?limit=10000&mimetype=image/png" },
      { test: /\.woff$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,  loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot$/,  loader: "file" },
      { test: /\.svg$/,  loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.less/,  loader: 'style!css!less'}

    ]
  }
};

module.exports = config;
