
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const isProduction = process.env.NODE_ENV === 'production';
const { setEntry,setHtmlPlugin } = require('./webpack.util.js')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESBuildPlugin = require('esbuild-webpack-plugin').default;

module.exports = () => {
  return {
    mode: isProduction ? "production" : "development",
    entry: setEntry,
    devtool: isProduction ? false : "inline-source-map",
    devServer: {
      open: true,
      hot: true, 
      port: 3001,
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "js/[name].[contenthash:10].js",
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          //.js文件loader
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        },
        {
          //.vue文件loader
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          //.css文件loader
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader']
        },
        { //图片
          test: /\.(png|svg|jpg|jpeg|gif|bmp)$/,
          type: 'asset/resource',
          generator:{ 
              filename: 'image/[contenthash:10].[ext]',
          }, 
        },
        {
          test: /\.mp4$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'video/[contenthash:10].[ext]',
            },
          },
        },
      ]
    },
    resolve: {// 设置模块如何被解析
      alias: {
        vue: "vue/dist/vue.esm-bundler.js"
      },
      extensions: ['.js', '.vue']// 按顺序解析这些后缀名
    },
    optimization: {
      minimizer: [new ESBuildPlugin()],
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      ...setHtmlPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:10].css',
        chunkFilename: 'css/[name].[contenthash:10].chunk.css'
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new CleanWebpackPlugin(),
    ].filter(Boolean)
  };
};
