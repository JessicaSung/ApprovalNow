module.exports = {
	entry: "./app/app.js",
	output: {
    	filename: "public/bundle.js"
  	},
  	resolve: {
  		root: __dirname,
  		alias: {
  			routes: 'app/config/routes.js'
  		},
  		extensions: ['', '.js', '.jsx']
  	},
  	module: {
  		loaders: [
  			{
  				test: /\.jsx?$/,
  				include: /app/,
		        loader: "babel",
		        query: {
		        	presets: ["react", "es2015", "stage-0"]
		        }
		    }
		]
	},
	devtool: "eval-source-map"
};