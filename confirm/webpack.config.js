

module.exports = {
	entry: {
		confirm: './index.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'scss-loader']
			}
		]
	}
}