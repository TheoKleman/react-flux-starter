var ExtractTextPlugin = require("extract-text-webpack-plugin");
var isProduction = process.env.NODE_ENV === 'production';

// Adding 'build' to the path when we're building for production
var folderPrefix = ''
if (isProduction) {
  folderPrefix = 'build/'
}

// Defining output
const outputs = {
  scripts: folderPrefix + 'dist/scripts/bundle.js',
  styles: folderPrefix + 'dist/styles/master.css'
}

module.exports = {
  context: __dirname + '/app',
  entry: "./scripts/index.js",
  output: {
    filename: outputs.scripts
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
    new ExtractTextPlugin(outputs.styles)
  ]
}
