import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoriteCharactersSlice';

const FavoriteCharactersPage = () => {
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters.characters);
  const dispatch = useDispatch();

  const handleRemove = (character) => {
    const confirmRemove = window.confirm(`"${character.name}" isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`);
    if (confirmRemove) {
      dispatch(removeFavorite(character));
      localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }
  };

  return (
    <div>
      <h2>Favori Karakterler</h2>
      <ul className="my-3">
        {favoriteCharacters.map((character) => (
          <li key={character.id} className="my-3">
            {character.name}{' '}
            <button
  onClick={() => handleRemove(character)}
  style={{ backgroundColor: 'black', color: 'white' }}
>
  Delete
</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCharactersPage;