// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url 
  },
  devtool: "cheap-module-source-map",
});
