import { useEffect, useState } from 'react'
import './EventsList.css';
import LoginButton from '../LoginButton/LoginButton';
import EventCard from '../EventCard/EventCard';
import LogoutButton from '../LogoutButton/LogoutButton';

function EventsList({ props }) {

  const { user, loginUser, logoutUser } = props;

  const [ events, setEvents ] = useState(null);

  const getAllEvents = async () => {
    const resp = await fetch('http://localhost:3000/events');
    const resul = await resp.json();

    setEvents(resul);
  }

  useEffect(() => {
    getAllEvents();
  },[]);

  return (
    <div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        { user !== null ? 
          <LogoutButton logoutUser={logoutUser} />
        :
          <LoginButton loginUser={loginUser}/>
        }
      </div>
      <div className='event-list-container'>
      { events !== null ?
        events.map((event) => (
          <EventCard propEvent={{ event }} user={ user } key={event._id}/>
        ))
        :
        <></>
      }
      </div>
    </div>
  )
}

export default EventsList