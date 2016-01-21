module.exports = {
	context : __dirname + '/app',
	entry : ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080','./main.jsx'],
	output : {
		path : __dirname + '/build',
		filename : 'bundle.js'
	},
	module : {
		loaders : [{
			test : /\.jsx?$/,
			loader : 'babel',
			exclude : /node_modules/,
			query: {
	          presets: ['es2015', 'react']
	        }
		}]
	}
}