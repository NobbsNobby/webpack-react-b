const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const cssModuleName = /\.m.css$/;

module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  devServer: {
    quiet: true
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: cssModuleName,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          "postcss-loader"
        ]
      },
      {
        test: cssModuleName,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html"
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
};
