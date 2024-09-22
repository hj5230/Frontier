#!/bin/bash

echo "----------> Running type check"
bun run tc

if [ $? -ne 0 ]; then
    echo
    echo "<---------- Type check failed. Aborting pack process."
    exit 1
fi

echo
echo "----------> Running build"
bun run build

if [ $? -ne 0 ]; then
    echo
    echo "<---------- Build failed, aborting pack process"
    exit 1
fi

VERSION=$(node -p "require('./package.json').version")

FILENAME="Frontier-${VERSION}.tar.xz"

echo
echo "----------> Packaging build..."
tar -czf "${FILENAME}" build/

echo
echo "<---------- '${FILENAME}' is ready to be deployed"
