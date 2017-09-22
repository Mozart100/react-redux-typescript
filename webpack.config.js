var path = require('path');

var distPath = path.resolve(__dirname, 'dist');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var indexHtmlPath = path.join(__dirname,"index.html");

module.exports = {
  devtool:"eval-source-map",
  // devtool:"source-map",
  entry: './src/index.tsx',
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js','jsx'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015','react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        // use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }

    ]
  },
  devServer: {
    contentBase: distPath,
    inline:true, // without webpack iframe
    // compress: true,
    port: 9000,
    stats:{
      chunks: true,
      colors: true,
      errors: true,
    }
    // stats:"errors-only"
  },
  plugins :[ new HtmlWebpackPlugin({
    template:indexHtmlPath,
    hash:true //to investigate
  })]
};