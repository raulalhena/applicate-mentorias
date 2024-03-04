import React from 'react'
import { useLocation } from 'react-router-dom'

function EventDetail() {

  const location = useLocation();

  const { user, event } = location.state;

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