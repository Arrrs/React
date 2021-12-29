let path = require('path');

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: './dist/'
	},
	devServer: {
		// overlay: true,
		static : {
			directory : path.join(__dirname, "./")
		},
		devMiddleware:{
			publicPath: "https://localhost:3000/dist/",
		},
		hot: 'only',
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
	conf.target = isProd ? 'browserslist' : 'web';
	return conf;
}