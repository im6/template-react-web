var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = "127.0.0.1",
  PORT = "3000";

var baseTemplate = {
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories:['node_modules',  './src/modules/']
  }
};


var loaders = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015','react', "stage-0"],
            plugins: [
                'transform-runtime',
                ['import', {
                    libraryName: 'antd',
                    libraryDirectory: "lib",
                    style: true
                }]
            ]
        }
    },
  { test: /\.less$/, loader: "style!css?modules!less"},
  //{ test: /\.css/, loader: "style-loader!css-loader?modules"},
  //{ test: /\.png$/, loader: "url-loader?limit=100000" },
  //{ test: /\.jpg$/, loader: "url-loader" }
  { test: /\.jpg$/, loader: "file-loader?name=assets/[name].[ext]" },
  //{ test: /\.(woff|png|jpg$|gif)$/, loader: 'url-loader?limit=10000' },
];



var plugins = {
  hot: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  watch: [
    new HtmlWebpackPlugin({
      title: 'ZJ Guo',
      template: 'src/template/index.html',
      //favicon: 'src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    })
  ],
  build: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
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
      title: 'ZJ Guo',
      template: 'src/template/index.html',
      favicon: './src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/template/error.html',
      filename: 'error.html',
      inject: false,
      showErrors: false
    })
  ]
};

var entry = {
    hot:[
      'webpack-dev-server/client?http://' + HOST + ':' + PORT,
      'webpack/hot/only-dev-server',
      './src/entry/index.jsx'
    ],
    watch:['./src/entry/index.jsx'],
    build:['./src/entry/index.jsx']
};



module.exports = {
  loaders: loaders,
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