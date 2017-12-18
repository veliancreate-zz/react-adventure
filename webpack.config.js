const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
module.exports = {
  entry: "./src/server/server.ts",
  target: 'node',
  output: {
    filename: "server.js",
    path: path.resolve('./src/server/dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    modules: [
      `${root}/node_modules`,
      'node_modules'
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd:['nodemon src/server/dist/server.js --watch src/server/dist']
    })
  ],
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader', // translates CSS into CommonJS
        }],
      },
    ]
  },
  watch: true,
  watchOptions: {
    poll: 1000,
    ignore: /node_modules/,
  }
}
