const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const TerserPlugin = require( 'terser-webpack-plugin' );

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

    // This is copied from upstream, except drop_console is set to false
    // to allow for console.log lines.
    optimization: {
        minimizer: [
			new TerserPlugin( {
				parallel: true,
				terserOptions: {
					output: {
						comments: /translators:/i,
					},
					compress: {
						passes: 2,
                        drop_console: false,
					},
					mangle: {
						reserved: [ '__', '_n', '_nx', '_x' ],
					},
				},
				extractComments: false,
			} ),
		],
    },
};