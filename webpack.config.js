const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill', 
    './app/js/index'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=stage-1,presets[]=react',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader?sourceMap']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
