import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchHistory{
    searchHistory: string[]
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
      searchHistory: []
  } as SearchHistory,
  reducers: {
    addSearch(state, action: PayloadAction<string>){
        if(state.searchHistory.includes(action.payload)){
            state.searchHistory = state.searchHistory.filter(item => item !== action.payload)
        }

        state.searchHistory.unshift(action.payload);
    },
    deleteSearch(state, action: PayloadAction<string>){
        state.searchHistory = state.searchHistory.filter(item => item !== action.payload);
    }
  },
})

export const getSearchHistory = (state: { search: SearchHistory }) => state.search.searchHistory;

export const { addSearch, deleteSearch } = searchSlice.actions
export default searchSlice.reducer