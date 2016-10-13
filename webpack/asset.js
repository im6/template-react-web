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
                    style: true  // use less, 'css' to css build
                }]
            ]
        }
    },
  { test: /\.less$/, loader: "style!css!less"}, // load ant.design
  {
    test: /\.css$/,
    loader: "style!css?modules!autoprefixer-loader?browsers=last 2 versions"
  },
  { test: /\.(gif|png|jpg|jpeg)($|\?)/, loader: 'url?limit=10000' },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
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