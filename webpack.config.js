const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'node_modules/@babel/polyfill/lib/index.js'),
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
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
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
          //'postcss-loader',
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000',
        options: {
          outputPath: './fonts/'
        }
      },
      {
        test: /\.(gif|png|jpg|mp4|svg)$/,
        loader: 'file-loader?name=/img/[name].[ext]',
        options: {
          // name: './img/[name].[ext]',
          outputPath: './img/'
        }
        // test: /\.(png|jpg|mp4|svg)$/,
        // use: [
        //   {
        //     loader: 'file-loader?limit=100000',
        //     options: {
        //       name: 'img/[name].[ext]',
        //     }
        //   }
        // ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([
      {
        from: './src/img',
        to: './img/[name].[ext]',
        toType: 'template'
      }
    ])
  ]
}
