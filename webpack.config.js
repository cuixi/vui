var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		'ggj-ui': './index.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
		library: 'ggj',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'scss-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
	]
}