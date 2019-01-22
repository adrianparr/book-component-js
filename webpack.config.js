const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'src/index.html',to:'index.html'},
      {from:'src/images',to:'images'},
      // {from:'src/pdfs',to:'pdfs'},
      // {from:'src/audio',to:'audio'},
      // {from:'src/docs',to:'docs'},
      // {from:'src/videos',to:'videos'}
    ]), 
  ]
};