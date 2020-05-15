const path = require('path');
const WebpackBar = require('webpackbar');
const modulesPath = 'node_modules';
const config = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'app.tsx')],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: { javascriptEnabled: true }
          }
        }]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [modulesPath],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.less'],
    alias: {
      '~': modulesPath
    }
  },
  watch: true,
  plugins: [
    new WebpackBar()
  ]
};
module.exports = config;