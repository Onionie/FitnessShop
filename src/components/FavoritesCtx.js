import { createContext, useState } from "react";

//Initial values
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  /* favoriteMeetup parameter will be added to initial state prevUserFavorites 
  that then will be the new state setUserFavorites */
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorite) => {
      //Filter method: looks for a meetup where meetup.id is not equal to meetupID
      return prevUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id !== meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
