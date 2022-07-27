const path = require("path");

const sourcePath = path.join(__dirname, "src");

const getFunctionFolderName = "get-function";
const getFunctionPath = path.join(sourcePath, getFunctionFolderName);
const getFunctionFileName = "get-function.ts";

const setFunctionFolderName = "set-function";
const setFunctionPath = path.join(sourcePath, setFunctionFolderName);
const setFunctionFileName = "set-function.ts";

module.exports = {
  target: "node",
  stats: "minimal",
  mode: "production",
  entry: {
    "get-function": path.join(getFunctionPath, getFunctionFileName),
    "set-function": path.join(setFunctionPath, setFunctionFileName),
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
