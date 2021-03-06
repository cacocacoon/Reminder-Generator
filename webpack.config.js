const path = require('path')
const webpack = require("webpack")
const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'docs')

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		chunkFilename: '[name].js',
		filename: 'app.js'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		contentBase: BUILD_DIR,
		port: 8008,
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config
