import { createSlice } from '@reduxjs/toolkit'
import { IEnv } from '@interfaces/env'

const initialState: IEnv = {
  NODE_ENV:
    (process.env.NODE_ENV as
      | 'development'
      | 'production') ?? 'development',
  LOG_LEVEL:
    (process.env.LOG_LEVEL as
      | 'debug'
      | 'info'
      | 'warn'
      | 'error') ?? 'debug',
  PORT: parseInt(process.env.PORT) ?? 3001,
  SERVICE_URI:
    process.env.SERVICE_URI ?? 'http://localhost:3000',
}

const envSlice = createSlice({
  name: 'env',
  initialState,
  reducers: {},
})

export default envSlice.reducer
