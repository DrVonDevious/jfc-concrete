import { createSlice, Slice } from "@reduxjs/toolkit"

export interface LanguageState {
  useSpanish: boolean
}

const initialState: LanguageState = {
  useSpanish: false,
}

export const languageSlice: Slice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state) {
      state.useSpanish = !state.useSpanish
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
