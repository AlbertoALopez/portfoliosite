const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: path.join(__dirname, 'style'),
    images: path.join(__dirname, 'build/img')
};

const common = {
	entry: {
		app: ["./app/index.js"],
		// resume: './app/resume.js'
		style: "./style/main.scss"
	},
	resolve: {
		extensions: ['', '.js', '.scss']
	},
	output: {
		path: path.resolve(__dirname + 'build'),
	 	publicPath: '/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				include: PATHS.app
			},
            {
                test: /\.(jpeg|jpg|png)$/,
                loader: 'file?name=[path][name].[hash].[ext]',
                include: PATHS.images
            }
    ]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, 'node_modules')]
	},
    compassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
    }
	// plugins: [
	// 	new CleanPlugin([PATHS.build])
	// ]
};

// Default config
if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			contentBase: './build/',

			// host and port are from env
			host: process.env.HOST,
			port: process.env.PORT
		},
		module: {
			loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				include: PATHS.style
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.style
			}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'build' || TARGET === 'stats') {
	module.exports = merge(common, {
		entry: {
			vendor: Object.keys(pkg.dependencies).filter(function (v) {
				// exclude alt-utils
				return v;
			})
		},
		output: {
			path: PATHS.build,
			filename: '[name].js',
			// chunkFilename: '[chunkhash].js'
		},
		module: {
			loaders: [{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			}]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': '"production"'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
			new ExtractTextPlugin('[name].css')
		]
	});
}
