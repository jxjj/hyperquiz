const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const webpack = require("webpack");

const plugins = [
  new HtmlWebpackPlugin({
    title: "HyperQuiz",
    template: "./src/index.html"
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: "defer"
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = () => ({
  entry: ["./src/index.js"],
  devtool: "source-map",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "./")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins,
  devServer: {
    publicPath: "/",
    open: true,
    historyApiFallback: true
  },
  mode: "development"
});
