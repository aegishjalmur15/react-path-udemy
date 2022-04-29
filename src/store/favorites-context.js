import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites:0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemsIsFavorite:(meetupId)=>{}
});

export function FavoritesContextProvider(props)
{
    const [userFavorites,setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prev)=>{
            return prev.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prev=>{
            return prev.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id === meetupId);

    }

    const context = {
        favorites:userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler
    }

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;