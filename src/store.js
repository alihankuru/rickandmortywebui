import { configureStore } from '@reduxjs/toolkit';
import favoriteCharactersReducer from './components/Favorites/favoriteCharactersSlice';

const store = configureStore({
  reducer: {
    favoriteCharacters: favoriteCharactersReducer,
    // other reducers...
  },
});

export default store;