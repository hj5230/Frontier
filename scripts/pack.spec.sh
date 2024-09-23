#!/bin/bash

echo
echo "----------> Running test pack script"

echo
echo "----------> Checking current branch"

BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo
echo "<---------- We're on branch: ${BRANCH}"

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
echo "----------> Packaging build"
tar -czf "${FILENAME}" build/

MD5=$(md5sum "${FILENAME}" | awk '{ print $1 }')

echo
echo "<---------- Project has been packaged"
echo "    - Version: ${VERSION}"
echo "    - MD5: ${MD5}"

rm -rf build/
rm ${FILENAME}

echo
echo "<---------- Test pack script complete"
