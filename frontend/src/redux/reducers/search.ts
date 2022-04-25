import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

interface Search{
    id: string,
    value: string,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: [] as Search[],
  reducers: {
    addSearch:{
        reducer: (state, action: PayloadAction<Search>) => {
            state.push(action.payload);
        },
        prepare: (value: string) => {
            const id = nanoid();
            return { payload: { id, value } }
        },
    },
    deleteSearch(state, action: PayloadAction<string>){
        const id = action.payload;
        return state.filter(item => item.id !== id);
    }
  },
})

export const { addSearch, deleteSearch } = searchSlice.actions
export const getAllSearch = (state: { search: Search[] }) => state.search;
export default searchSlice.reducer