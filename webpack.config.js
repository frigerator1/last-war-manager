const webpack = require('webpack');
const path = require('path');
const WrapperPlugin = require('wrapper-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'last-war-manager.user.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'last-war-manager.user.js.map',
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
    new WrapperPlugin({
      afterOptimizations: true,
      header: '// ==UserScript==\n'
              + '// @name          Last War Manager\n'
              + '// @author        j0Shi <psycho.j0shi@gmail.com>\n'
              + '// @namespace     https://github.com/j0Shi82/\n'
              + '// @homepageURL   https://github.com/j0Shi82/last-war-manager\n'
              + '// @description   Some tweaking to the Last War UI and environment\n'
              + '// @license       GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt\n'
              + '// @updateURL     https://raw.githubusercontent.com/j0Shi82/last-war-manager/master/dist/last-war-manager.user.js\n'
              + '// @downloadURL   https://raw.githubusercontent.com/j0Shi82/last-war-manager/master/dist/last-war-manager.user.js\n'
              + '// @supportURL    https://github.com/j0Shi82/last-war-manager/issues\n'
              + '// @match         http*://*.last-war.de/main.php*\n'
              + '// @match         http*://*.last-war.de/main-mobile.php*\n'
              + '// @match         http*://*.last-war.de/planetenscanner_view.php*\n'
              + '// @match         http*://*.last-war.de/view/content/new_window/observationen_view.php*\n'
              + '// @require       https://cdn.jsdelivr.net/gh/j0Shi82/last-war-manager@9b03c1d9589c3b020fcf549d2d02ee6fa2da4ceb/assets/GM_config.min.js\n'
              + '// @require       https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js\n'
              + '// @icon          https://raw.githubusercontent.com/j0Shi82/last-war-manager/0814103384c9be78cc28611fd973b5a7fdfdbb19/assets/logo-small.png\n'
              + '// @grant         GM.getValue\n'
              + '// @grant         GM.setValue\n'
              + '// @grant         GM_getValue\n'
              + '// @grant         GM_setValue\n'
              + '// @grant         GM_getResourceText\n'
              + '// @grant         GM_addStyle\n'
              + '// @run-at        document-start\n'
              + '// @version       1.0.1\n'
              + '// ==/UserScript==\n',
    }),
  ],
};
