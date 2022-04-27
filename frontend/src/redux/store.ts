import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';
import { api } from './services/api';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
