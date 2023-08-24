'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface LanguageState{
  value: string
}

const initialState : LanguageState = {
  value: 'EN'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers:{
    changeSpanish: (state) => { state.value = 'ES' },
    changeEnglish: (state) => { state.value = 'EN' }
  }
})

export const { changeSpanish, changeEnglish } = languageSlice.actions;

export default languageSlice.reducer