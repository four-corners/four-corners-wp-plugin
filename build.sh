#!/usr/bin/env bash

set -euxo pipefail

rm -rf build dist
mkdir build
touch build/.gitkeep

# Run build twice, it needs to happen like that otherwise changes won't go into dist/build/
wp-scripts build src/*.js --output-path=build/
wp-scripts build src/*.js --output-path=build/

# Keep folder alive in git
rm -r build
mkdir build
touch build/.gitkeep

# Remove keep file from production zip
rm dist/build/.gitkeep