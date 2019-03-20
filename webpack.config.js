const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.join(__dirname, 'node_modules/@babel/polyfill/lib/index.js') ,path.join(__dirname,'src','index.js')],
  output: {
    path: path.join(__dirname,'build'),
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          //'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader?limit=100000',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ],
      },
      {
        // test: /\.(gif|png|jpg)$/,
        // loader: 'file-loader',
        // options: {
        //   name: './img/[name].[ext]',
        //   outputPath: './img/'
        // }
        test: /\.(png|jpg|mp4|svg)$/,
        use: [
          {
            loader: 'file-loader?limiti=100000',
            options: {
              name: 'img/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ]
}