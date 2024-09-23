#!/bin/bash

echo
echo "----------> Aquiring version info"

VERSION=$(node -p "require('./package.json').version")
FILENAME="Frontier-${VERSION}.tar.xz"

echo
echo "<---------- Detected project version: ${VERSION}"

echo
echo "----------> Running type check"
bun run tc

if [ $? -ne 0 ]; then
    echo
    echo "<---------- Type check failed. Aborting pack process"
    exit 1
fi

echo
echo "<---------- Type check passed"

echo
echo "----------> Running build"
bun run build

if [ $? -ne 0 ]; then
    echo
    echo "<---------- Build failed, aborting pack process"
    exit 1
fi

echo
echo "<---------- Build successful"

echo
echo "----------> Packaging build, project version: ${VERSION}"
tar -czf "${FILENAME}" build/

echo
echo "<---------- '${FILENAME}' is ready to be deployed"
