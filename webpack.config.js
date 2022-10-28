const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  devtool: "source-map",
  entry: {
    main: "./src/client/etc/moveLocation.ts",
    cssMainLoader: "./src/client/cssTS/cssMainLoader.ts",
    cssAccountLoader: "./src/client/cssTS/cssAccountLoader.ts",
    income: "./src/client/income/income.ts",
    expense: "./src/client/expense/expense.ts",
    asset: "./src/client/asset/asset.ts",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "distClient"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/client/html/index.html",
      chunks: ["main", "cssMainLoader"],
    }),
    new HtmlWebpackPlugin({
      filename: "incomeScreen.html",
      template: "./src/client/html/incomeScreen.html",
      chunks: ["income", "cssAccountLoader"],
    }),
    new HtmlWebpackPlugin({
      filename: "expenseScreen.html",
      template: "./src/client/html/expenseScreen.html",
      chunks: ["expense", "cssAccountLoader"],
    }),
    new HtmlWebpackPlugin({
      filename: "assetScreen.html",
      template: "./src/client/html/assetScreen.html",
      chunks: ["asset", "cssAccountLoader"],
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
