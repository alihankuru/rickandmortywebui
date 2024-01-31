import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [], // Array to store favorite characters
};

const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.characters.length < 10) {
        state.characters.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;