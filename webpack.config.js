const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  // },
  // devServer: {
  //     contentBase: path.resolve(__dirname, 'dist'),
  //     open: true
  // },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // preset env permet d'utiliser la liste des navigateurs utilisables avec le site Can I Use.
              '@babel/preset-env',
              // comment on traite react
              '@babel/preset-react'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        // use lit les plugins dans le sens inverse d'écriture, donc le premier en dernier.
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    open: true,
    historyApiFallback: true
  }
};
