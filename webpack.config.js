module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './build/main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true
  }
}
