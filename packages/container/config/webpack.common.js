const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // process all code in react
            // transform code to variety of different ways
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // add conditional code to run in browser
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html',
  })
  ]
};
