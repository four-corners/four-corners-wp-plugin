# Four Corners WordPress plugin

This plugin initiates your WordPress site with the required JavaScript and CSS to easily publish Four Corners photos.

Create your Four Corners photo at [fourcornersproject.org](https://fourcornersproject.org)

## Development

Run `npm install` if this is the first time developing on the repo.

This is your development cycle:
1. Update code in `src/`
2. Run `update_version.sh` with the old and new version number: `./update_version.sh 1.2.3 1.2.4`
3. Run `npm run build` (or `./build.sh`, they do the same thing)
4. Copy/rename `dist` to `four-corners-wp-plugin`
5. Zip that folder and that is your plugin to upload
