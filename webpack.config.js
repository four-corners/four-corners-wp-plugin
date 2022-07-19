const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
module.exports = {
	...defaultConfig,
	experiments: {
		asyncWebAssembly: true,
		// importAsync: true
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: "index.php",
					to: "../dist",
				},
				{
					from: "block.json",
					to: "../dist",
				},
				{
					from: "assets/*",
					to: "../dist",
				},
				{
					from: "build/*",
					to: "../dist",
				},
			],
		}),
		...defaultConfig.plugins,
	],
};