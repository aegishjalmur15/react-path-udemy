import React from "react";
import Card from "../ui/Card";
import styles from './NewMeetupForm.module.css';

function NewMeetupForm(){
    return <Card>
        <form className={styles.form}>
            <div className={styles.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title"/>
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup image</label>
                <input type="url" required id="image"/>
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup image</label>
                <input type="url" required id="image"/>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;