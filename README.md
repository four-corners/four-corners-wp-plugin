# Four Corners WordPress plugin

This plugin initiates your WordPress site with the required JavaScript and CSS to easily publish Four Corners photos.

Create your Four Corners photo at [fourcornersproject.org](https://fourcornersproject.org)

## Development

Run `npm install` if this is the first time developing on the repo.

This is your development cycle:
1. Update code in `src/`
2. Edit `update_version.sh` and run it
3. Run `npm run build` (or `./build.sh`, they do the same thing)
4. ZIP the `dist` folder and that is your plugin to upload
