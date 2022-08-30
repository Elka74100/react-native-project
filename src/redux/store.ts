import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { apiSlice } from './api/firstApi/apiSlice'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { sonarApiSlice } from './api/sonarApi/sonarApiSlice'
import sonarTokenReducer from './slices/tokenSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [sonarApiSlice.reducerPath]: sonarApiSlice.reducer,
        token: sonarTokenReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, sonarApiSlice.middleware),
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector