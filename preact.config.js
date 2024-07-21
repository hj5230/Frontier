/* eslint-disable no-undef */
import path, { resolve } from 'path'
import webpack from 'webpack'
import dotenv from 'dotenv'

export default config => {
  const envVars = dotenv.config({
    path: resolve(__dirname, '.env'),
    encoding: 'utf8',
    debug: false,
  }).parsed

  const envKeys = Object.keys(envVars || {}).reduce(
    (prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(
        envVars[next],
      )
      return prev
    },
    {},
  )

  config.plugins.push(new webpack.DefinePlugin(envKeys))

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
    '@store': path.resolve(__dirname, 'src/store'),
    '@style': path.resolve(__dirname, 'src/style'),
  }

  return config
}
