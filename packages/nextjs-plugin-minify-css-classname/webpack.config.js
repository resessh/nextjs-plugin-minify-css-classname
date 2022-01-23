const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    symlinks: false,
  },
  output: {
    path: path.join(__dirname, './lib'),
    publicPath: '/',
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },

  entry: {
    index: [path.resolve(__dirname, './src/index.ts')],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: false,
            },
          },
        ],
        exclude: [/node_modules/, /\.spec\.ts$/],
      },
    ],
  },

  devtool: false,
};
