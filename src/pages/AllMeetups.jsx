import React, {useState, useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);

    

    fetch('https://dummy-backend-bfc5c-default-rtdb.firebaseio.com/meetups.json',
    {
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': "*"
      } 
    })
    .then(res=>{
      return res.json();
    }).then(data=>{
      const meetups = []

      for(const key in data)
      {
        const meetup = {
          id:key,
          ...data[key]
        };
        meetups.push(meetup)
      };

      setMeetups(meetups);
      setIsLoading(false);
    });    
    
  },[])
  
    if(isLoading)
    {
      return <section>
        <p>Loading</p>
      </section>
    }

    return (
    <section>
      <MeetupList  meetups={meetups}/>
    </section>)
}

export default AllMeetupsPage;