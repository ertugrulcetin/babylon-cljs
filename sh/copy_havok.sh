#!/bin/bash

# Define source and destination directories
src="src/vendor/HavokPhysics.wasm"
dst="resources/public/js/compiled/"

# Check if destination directory exists and if not, create it
mkdir -p $dst

# Copy file
cp $src $dst

echo "HavokPhysics.wasm has been successfully copied to the destination directory."
