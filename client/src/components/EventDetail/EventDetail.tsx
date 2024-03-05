import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

function EventDetail() {

  const { user } = useContext(AuthContext);

  const location = useLocation();
  const { event } = location.state;

  return (
    <div>
      EventDetail<br/>
      User: { user.email }<br/>
      Title: { event.title }<br/>
      Description: { event.description }<br/>
    </div>
  )
}

export default EventDetail