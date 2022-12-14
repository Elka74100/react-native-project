import { createSlice } from '@reduxjs/toolkit'
import Counter from '../models/counter'
import { RootState } from '../store'

const initialState: Counter = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const counterActions = counterSlice.actions

export const selectCounter = (state: RootState) => state.counter

export default counterSlice.reducer