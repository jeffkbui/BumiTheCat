const path = require("path");

module.exports = {
   context: __dirname,
   entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.jsx?$/,
               exclude: /(node_modules)/,
           }
       ]
   },
   devtool: 'inline-source-map',
   resolve: {
       extensions: [".js", ".jsx", "*"]
   }
};