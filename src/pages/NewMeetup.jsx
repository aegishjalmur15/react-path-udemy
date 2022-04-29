import React from "react";
import {useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://dummy-backend-bfc5c-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            history('/',{replace:true})
        });    

    }
    
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;