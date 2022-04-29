import React, { useContext } from "react";
import styles from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoriteContext from "../../store/favorites-context";

function MeetupItem(props){

    const favoritesCtx = useContext(FavoriteContext);

    const itemsIsFavorite = favoritesCtx.itemsIsFavorite(props.meetup.id);

    function toggleFavoriteStatusHandler(){
        if(itemsIsFavorite)
        {
            favoritesCtx.removeFavorite(props.meetup.id)
        }
        else{
            favoritesCtx.addFavorite({
                id:props.meetup.id,
                title:props.meetup.title,
                image:props.meetup.image,
                address: props.meetup.address,
                description:props.meetup.description
            })
        }
    }

    return (
        <li className={styles.item}>
            <Card>
            <div className={styles.image}>
                <img className={styles.image} src={props.meetup.image} alt={props.meetup.title} />
            </div>
            <div className={styles.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemsIsFavorite? 'Remove from favorites':'To favorites'}
                </button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem;