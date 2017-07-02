module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js'
  },
  plugins: [],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}