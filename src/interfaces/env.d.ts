interface Env {
  readonly ENV: 'development' | 'production'
  readonly LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error'
  readonly PORT: string
  readonly SERVICE_URI: string
}
