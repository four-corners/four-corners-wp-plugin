#!/usr/bin/env bash

# Escape old version for sed so 1.2.3 becomes 1\.2\.3
# https://stackoverflow.com/a/54661050
OLD_VERSION="$(echo "$1" | sed 's:[]\[^$.*/]:\\&:g')"
sed -i "s/$OLD_VERSION/$2/g" block.json src/plugin.js package.json index.php
