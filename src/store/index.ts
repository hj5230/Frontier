import { configureStore } from '@reduxjs/toolkit'
import envReducer from '@store/env'

const store = configureStore({
  reducer: {
    env: envReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
