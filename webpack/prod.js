const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const {
  clientBaseConfig,
  serverBaseConfig,
  localIdentName,
  include,
} = require('./base');

const prodBase = {
  mode: 'production',
};

const client = Object.assign(clientBaseConfig, prodBase, {
  output: {
    // publicPath: '//dkny.oss-cn-hangzhou.aliyuncs.com/2/',
    path: path.join(__dirname, '../dist/public'),
    filename: '[name].js?[contenthash]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css?[contenthash]',
    }),
    new OptimizeCssAssetsPlugin(),
    // new CompressionPlugin({
    //   filename: '[path]',
    //   minRatio: 1,
    // }),
    new webpack.DefinePlugin({
      'process.env.lastBuildDate': JSON.stringify(
        `${new Date().toLocaleString()} UTC`
      ),
    }),
  ],
  optimization: {
    // minimize: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
      },
    },
  },
});

const server = Object.assign(serverBaseConfig, prodBase, {
  output: {
    path: path.join(__dirname, '../dist/server'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        include,
        use: [
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
              modules: {
                localIdentName,
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.lastBuildDate': JSON.stringify(
        `${new Date().toLocaleString()} EST`
      ),
    }),
  ],
});

module.exports = [client, server];
