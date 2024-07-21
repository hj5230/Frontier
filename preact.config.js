/* eslint-disable no-undef */
import path from 'node:path'

export default config => {
  config.resolve.alias = {
    ...config.resolve.alias,
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

  return config
}
