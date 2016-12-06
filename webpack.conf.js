var path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: "umd"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, './node_modules/wechat-square-bracket-emotions/dist'),
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
