var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/app',
  // devtool: "source-map",
  entry: ["./scripts/app.js"],
  output: {
    filename: "../dist/bundle.js"
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
        loader: ExtractTextPlugin.extract(["css", "sass"])
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin("./dist/styles/master.css")
  ]
}