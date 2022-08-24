import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { apiSlice } from './api/apiSlice'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector