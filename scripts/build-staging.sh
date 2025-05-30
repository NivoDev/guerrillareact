#!/bin/bash

# Print commands and their arguments as they are executed
set -x

# Set Node version using nvm
echo "Setting up Node.js version..."
. ~/.nvm/nvm.sh
nvm install 20
nvm use 20

# Set environment variables
export NODE_OPTIONS="--openssl-legacy-provider"
export CI=false

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the build
echo "Running build..."
npm run build 