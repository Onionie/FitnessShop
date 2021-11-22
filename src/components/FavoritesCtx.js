import { createContext, useState } from "react";

//Initial values
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (entryId) => {},
  itemIsFavorite: (entryId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  /* favoriteEntry parameter will be added to initial state prevFavoriteEntry
  that then will be the new state setUserFavorites */
  function addFavoriteHandler(favoriteEntry) {
    setUserFavorites((prevFavoriteEntry) => {
      // console.log(prevFavoriteEntry);
      return prevFavoriteEntry.concat(favoriteEntry);
    });
  }

  function removeFavoriteHandler(entryId) {
    setUserFavorites((prevFavoriteEntry) => {
      //Filter method: looks for an entry where entry.id is not equal to entryID
      return prevFavoriteEntry.filter((entry) => entry.id !== entryId);
    });
  }

  function itemIsFavoriteHandler(entryId) {
    return userFavorites.some((entry) => entry.id === entryId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
