export interface IEnv {
  readonly NODE_ENV: 'development' | 'production'
  readonly LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error'
  readonly PORT: number
  readonly SERVICE_URI: string
}
