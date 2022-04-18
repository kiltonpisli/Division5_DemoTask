import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favorites';
import { api } from './services/api';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
