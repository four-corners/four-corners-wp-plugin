const defaultConfig = require("@wordpress/scripts/config/webpack.config");
module.exports = {
	experiments: {
    asyncWebAssembly: true,
    // importAsync: true
  },
  ...defaultConfig,
};