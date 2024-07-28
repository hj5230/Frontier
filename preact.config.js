/* eslint-disable no-undef */
import path from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default (config, env) => {
  config.resolve.alias = {
    // original alias
    ...config.resolve.alias,

    // react => preact alias
    react: 'preact/compat',
    'react-dom': 'preact/compat',
    'react-dom/test-utils': 'preact/test-utils',
    'react/jsx-runtime': 'preact/jsx-runtime',

    // @path alias
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(
      __dirname,
      'src/components',
    ),
    '@interfaces': path.resolve(
      __dirname,
      'src/interfaces',
    ),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@style': path.resolve(__dirname, 'src/style'),
  }

  // we are very clear that its packaging volume exceeds the limit
  config.performance = {
    hints: false,
  }

  // create bundle analyzer when production build
  if (env.production) {
    console.warn('Building in Production Mode...')
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    )
  }

  return config
}
