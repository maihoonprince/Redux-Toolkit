import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'

// Now make a store:
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

// these lines when u working in typescript:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;