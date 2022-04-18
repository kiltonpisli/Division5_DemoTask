import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Movie {
//   movies: []
}

const initialState = [] as Movie[];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    
  },
})

export const { } = favoritesSlice.actions

export default favoritesSlice.reducer