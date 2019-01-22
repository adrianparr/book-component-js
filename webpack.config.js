const path = require('path');
// const webpack = require("webpack");
// const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader"
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'},
      // {from:'src/static-html-file.html',to:'static-html-file.html'},
      // {from:'src/pdfs',to:'pdfs'},
      // {from:'src/audio',to:'audio'},
      // {from:'src/docs',to:'docs'},
      // {from:'src/videos',to:'videos'}
    ]),
    new HtmlWebpackPlugin({
      title: 'Book Component JS',
      filename: 'index.html',
      template: './src/index.ejs',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       autoprefixer()
    //     ]
    //   }
    // })
  ]
};