const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const PATHS = {
	app: path.join(__dirname, 'app/js'),
	build: path.join(__dirname, 'build'),
	style: path.join(__dirname, 'app/style/main.scss'),
};

// Common config
const common = {
	entry: {
		app: PATHS.app,
	},
	resolve: {
		extensions: ['', '.js', '.scss']
	},
	output: {
		path: PATHS.build,
		filename: '[name].[ext]'
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
                loader: 'url?limit=25000&name=../img/[name].[ext]',
            }
        ]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, 'node_modules')]
	},
    compassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
    }
};

// Development server config
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
    	output: {
            // cPath: '/assets/',
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

// Build config
if (TARGET === 'build' || TARGET === 'stats') {
	module.exports = merge(common, {
        entry: {
    		resume: './app/js/resume.js',
    		style: PATHS.style
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
