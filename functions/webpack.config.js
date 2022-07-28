const path = require("path");

const sourcePath = path.join(__dirname, "src");

const getFunctionFileName = "get-function.ts";
const getFunctionPath = path.join(sourcePath, getFunctionFileName);

const setFunctionFileName = "set-function.ts";
const setFunctionPath = path.join(sourcePath, setFunctionFileName);

module.exports = {
  target: "node",
  stats: "minimal",
  mode: "production",
  entry: {
    "get-function": getFunctionPath,
    "set-function": setFunctionPath,
  },
  output: {
    clean: true,
    filename: "[name]/index.js",
    path: path.join(__dirname, "build"),
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
