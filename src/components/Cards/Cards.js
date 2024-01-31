import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../Favorites/favoriteCharactersSlice'; // Import your addFavorite action
import styles from './Cards.module.scss'; // Import your styles
import { FaHeart } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Cards = ({ results, page }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters.characters);

  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      const isFavorite = favoriteCharacters.some((character) => character.id === id);

      return (
        <Link 
         style={{textDecoration:"none"}}
          to = {`${page}${id}`}
        key={id} className={`col-4 position-relative mb-2 text-dark ${styles.cardWrapper}`}>
          <div className={`${styles.cards} ${isFavorite ? styles.favoriteCard : ''}`}>
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>

            <div className={`${styles.badge} position-absolute badge bg-warning`}>{status}</div>

            {/* Add to Favorites Button */}
            <button
      className={`btn btn-dark ${isFavorite ? styles.disabled : ''} ${styles.button}`}
      onClick={(e) => {
        e.preventDefault(); // Stop the default button click action
        handleAddToFavorites(x);
      }}
      disabled={isFavorite}
    >
      <span className={styles.button}>
        <FaHeart className={styles.heartIcon} />
        <span style={{ marginLeft: '0.5rem' }}>
          {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
        </span>
      </span>
    </button>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Found";
  }

  const handleAddToFavorites = (character) => {
    dispatch(addFavorite(character));
    // localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters)); // You may or may not need this depending on your application flow
  };

  return <>{display}</>;
};

export default Cards;
