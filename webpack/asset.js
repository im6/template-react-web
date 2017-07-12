var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  FriendlyErrors = require('friendly-errors-webpack-plugin');

const HOST = "127.0.0.1",
  PORT = "3000",
  antDir = process.platform === 'win32' ? /node_modules\\antd\\lib/ :  /node_modules\/antd\/lib/,
  VENDORS = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux-saga',
    'immutable'
  ];

var commonsChunk = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js',
  minChunks: Infinity
});

var baseTemplate = {
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};


var rules = [
  {
    enforce: "pre",
    test: /\.jsx?$/,
    exclude: /node_modules/,
    include: [
      path.join(__dirname, '../src')
    ],
    loader: "eslint-loader",
    options: {
      failOnWarning: true,
    }
  },
  {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          "presets": ["es2015","react", "stage-0"],
          "plugins": [
            "transform-runtime",
            ["import", {
              "libraryName": "antd",
              "libraryDirectory": "lib",
              "style": true  // use less, 'css' to css build
            }]
          ]
        }
      }]
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
    include: antDir
  },

  {
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[hash:base64:5]'
        }
      },
      'less-loader'
    ],
    exclude: antDir
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      },
    ],
  },
  {
    test: /\.(gif|png|jpg|jpeg)($|\?)/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    ],
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: ['file-loader']
  }
];



var plugins = {
  hot: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Starter DEV',
      template: 'src/template/index.html',
      //favicon: 'src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    }),
  ],
  watch: [
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: 'src/template/index.html',
      //favicon: 'src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    commonsChunk,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    }),
    new FriendlyErrors()
  ],
  build: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mange:{
        "screw-ie8" : true
      },
      compress : {
        "screw_ie8" : true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: 'src/template/index.html',
      favicon: './src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    commonsChunk
  ]
};

var entry = {
    hot:[
      './src/entry/index.jsx',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://0.0.0.0:' + PORT

    ],
    watch:{
      app: './src/entry/index.jsx',
      vendor: VENDORS
    },
    build:{
      app: './src/entry/index_prod.jsx',
      vendor: VENDORS
    }
};


module.exports = {
  rules: rules,
  plugins: function(mode){
      return plugins[mode]
  },
  entry: function(mode){
      return entry[mode];
  },
  template: baseTemplate,
  constant: {
    port: PORT,
    host: HOST
  }
};
