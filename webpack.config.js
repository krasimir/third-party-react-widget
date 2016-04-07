module.exports = {
  entry: './src/widget.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/public',
    filename: 'widget.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.js|\.jsx)$/,
        loader: 'cssx-loader',
        exclude: /node_modules/
      }
    ]
  }
}
