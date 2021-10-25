const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  resolve: {
    //创建 import 或 require 的别名，来确保模块引入变得更简单，例如src下的内容可以通过@代替前置路径
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // 引用到达目录后不继续写下去会自动引用index.xxx文件，如果没有index则查找main
    mainFiles: ['index', 'main'],
    // 按照这个循序去解析，使用户在引入时可以不带后缀名
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      //解析jsx
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      // 解析ts tsx
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // 加载所有js
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      //解析less css
      {
        test: /\.(sa|sc|le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          // 当解析antd.less，必须写成下面格式，否则会报Inline JavaScript is not enabled错误
          {
            loader: 'less-loader',
            options: { lessOptions: { javascriptEnabled: true } },
          },
        ],
      },
      // 解析静态资源
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline',
      },
      // 解析字体
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  // externals 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
  //   externals: {
  //     react: 'React',
  //     'react-dom': 'ReactDOM',
  //   },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
};
