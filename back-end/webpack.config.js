const path = require("path");

const sourcePath = path.join(__dirname, "src");

const getFunctionFileName = "get-function.ts";
const getFunctionFolderPath = "get-function";
const getFunctionPath = path.join(sourcePath, getFunctionFolderPath, getFunctionFileName);

const setFunctionFileName = "set-function.ts";
const setFunctionFolderPath = "set-function";
const setFunctionPath = path.join(sourcePath, setFunctionFolderPath, setFunctionFileName);

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
