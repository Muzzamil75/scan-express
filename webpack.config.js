// module.exports = {
//     // ...
//     module: {
//       rules: [
//         {
//           test: /\.(ts|tsx)$/,
//           exclude: /node_modules/,
//           use: [
//             "ts-loader",
//             // Creates `style` nodes from JS strings
//             "style-loader",
//             {
//               loader: "css-loader",
//               // setting 'compileType' to "icss" sovled my problem without side effect.
//               options: { modules: true}
//             },
//             // Translates CSS into CommonJS
//             // "css-loader?modules=true&camelCase=true",
//             // Compiles Sass to CSS
//             "sass-loader",
//             // "scss-loader",
//           ],
//         //   use: {
//         //     loader: 'babel-loader',
//         //     options: {
//         //       presets: ['@babel/preset-react'],
//         //     },
//         //   }
//         },
//         // other rules...
//       ],
//     },
//     resolve: {
//       extensions: ['.tsx', '.ts', '.js'],
//     },
//   };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    // this allows proper working of absolute paths within the app
    alias: {
      src: path.resolve(__dirname, 'src'), // R
    },
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        // test: /\.(js|ts|tsx)$/,
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        // use : ['ts-loader']
      },
      // for handling images
      {
        test: /\.png$/,
        use: ['file-loader'],
      },
      {
        // test: /\.css$/,
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
