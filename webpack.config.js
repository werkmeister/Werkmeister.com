var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style!css!postcss',
      include: /main\.css$/
    },
    {
      test: /\.css$/,
      loader: 'style!css?module!postcss',
      include: /components\.css$/
    },
    {
      test: /\.(jpe?g|png|gif|otf|eot|svg|ttf|woff2?).*$/,
      loader: 'url',
      query: { limit: 10240 }
    }]
  },
  postcss: [
    require('postcss-import')({
      paths: ['./src/styles']
    }),
    require('postcss-nested'),
    require('cssnext')()
    // require('csswring')
  ]
};
