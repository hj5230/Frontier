/**
 * @description
 * @todo output.assetsPrefix - use jsdelivr CDN speed up
 *    access to build assets
 * @note source.alias - rsbuild is capable of aliasing paths
 *    from tsconfig, source.aliasStrategy option defaults to
 *    prefer-tsconfig
 * @note performance.chunkSplit - by default, rsbuild split
 *    chunks by experience, it is all good at this point,
 *    consider split by size when bundle size grows too large
 */

import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginPreact } from '@rsbuild/plugin-preact'

const bundleTimestamp = new Date().getTime().toString()

export default defineConfig({
  plugins: [pluginPreact()],
  html: {
    title: 'Frontier',
    favicon: path.resolve(__dirname, 'public/favicon.ico'),
    appIcon: {
      name: 'Frontier',
      icons: [
        {
          src: path.resolve(
            __dirname,
            'public/icons/android-chrome-192x192.png',
          ),
          size: 192,
        },
        {
          src: path.resolve(
            __dirname,
            'public/icons/android-chrome-512x512.png',
          ),
          size: 512,
        },
        {
          src: path.resolve(
            __dirname,
            'public/icons/apple-touch-icon.png',
          ),
          size: 180,
        },
      ],
    },
  },
  output: {
    distPath: {
      root: './build',
    },
    cleanDistPath: true,
  },
  security: {
    nonce: bundleTimestamp,
    sri: {
      enable: true,
      algorithm: 'sha256',
    },
  },
  performance: {
    bundleAnalyze: process.env.BUNDLE_ANALYZE
      ? {
          reportFilename: path.resolve(
            __dirname,
            'reports',
            `report-${bundleTimestamp}.html`,
          ),
        }
      : undefined,
    profile: true,
    removeConsole: ['log', 'info', 'table', 'group'],
  },
})
