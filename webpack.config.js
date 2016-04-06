module.exports = {
  entry: ["./app/scripts/app.js"],
  output: {
    filename: "./app/dist/scripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}
