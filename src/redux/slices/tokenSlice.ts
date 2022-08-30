import { createSlice } from '@reduxjs/toolkit'

interface Token {
  value: string
}

const initialState: Token = {
  value: "",
}

const sonarTokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload
    },
  },
})

export const tokenActions = sonarTokenSlice.actions

export default sonarTokenSlice.reducer