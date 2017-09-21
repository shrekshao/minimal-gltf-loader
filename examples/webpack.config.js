var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
      alias: {
        // Lib: path.resolve(__dirname, 'demo/lib/'),
        // Shaders: path.resolve(__dirname, 'demo/lib/src/shaders')
      }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(glsl|vs|fs)$/,
            use: [
                'shader-loader'
            ]
        }
    ],
    // loaders: [
    //   {
    //     test: /\.glsl$/,
    //     loader: "webpack-glsl"
    //   },
    // ]
  },
  plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //     warnings: false,
        //     drop_console: false,
        //     }
        // })
        // new UglifyJSPlugin()

        // new HtmlWebpackPlugin({
        //   title: "glAvatar demo"
        // })
    ],
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    port: 7777
  }
};