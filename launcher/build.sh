#!/bin/bash

# Build script for Blackbird Website Launcher

echo "Building Blackbird Website Launcher..."
echo ""

cd "$(dirname "$0")"

# Build for Windows (64-bit)
echo "Building for Windows (64-bit)..."
GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o "../BlackbirdWebsite.exe" .

if [ $? -eq 0 ]; then
    echo ""
    echo "============================================"
    echo "Build successful!"
    echo "Output: BlackbirdWebsite.exe"
    echo "============================================"
    echo ""
    echo "You can now send BlackbirdWebsite.exe to your client."
    echo "They just need to double-click it to view the website."
else
    echo ""
    echo "Build failed!"
    exit 1
fi
