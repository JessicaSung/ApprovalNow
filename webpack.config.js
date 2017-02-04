module.exports = {
	entry: "./app/app.js",
	output: {
    	filename: "public/bundle.js"
  	},
  	resolve: {
  		root: __dirname,
  		alias: {
        Inventory: 'app/components/Inventory.js',
        InventoryItem: 'app/components/InventoryItem.js',
        LoginSignIn: 'app/layouts/LoginSignIn.js',
        LoginSignOut: 'app/layouts/LoginSignOut.js',
        LoginSignUp: 'app/layouts/LoginSignUp.js',
        LoginSignUpSuccessful: 'app/layouts/LoginSignUpSuccessful.js',
        Main: 'app/components/Main.js',
        Nav: 'app/components/Nav.js',
  			routes: 'app/config/routes.js',
        SupplyForm: 'app/layouts/SupplyForm.js',
        User: 'api/models/User.js',
        Welcome: 'app/layouts/Welcome.js'
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