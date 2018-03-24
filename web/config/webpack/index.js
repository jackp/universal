/**
 * Base Webpack Configuration
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

// Default NODE_ENV to 'production'
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Path helpers
const rootDir = path.resolve(__dirname, "../../../");
const sourceDir = path.resolve(rootDir, "src");
const destDir = path.resolve(rootDir, "web/build");

const baseConfig = {
  context: rootDir,
  entry: ["./web/index.web.ts"],
  output: {
    path: destDir,
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".web.ts", ".web.tsx", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./web/index.html" })]
};

module.exports = merge(baseConfig, require(`./${process.env.NODE_ENV}.js`));
