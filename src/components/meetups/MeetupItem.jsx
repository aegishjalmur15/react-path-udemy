import React from "react";
import styles from './MeetupItem.module.css'
import Card from '../ui/Card'

function MeetupItem(props){
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
                <button>To Favorites</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem;