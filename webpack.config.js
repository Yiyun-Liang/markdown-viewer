var webpack = require('webpack');

// same as running in terminal: webpack ./public/app.js ./public/bundle.js
module.exports = {
  entry: [
    'script!',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Container: 'app/components/Container',
      RawInput: 'app/components/RawInput'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: "html!markdown" 
      },
      {
        // loader to load jsx files
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
