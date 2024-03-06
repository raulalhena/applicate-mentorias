import './EventCard.css'
import { Link } from 'react-router-dom';

function EventCard({ propEvent, user }) {

  const { event } = propEvent;

  return (
    <div>
      <div className='event-card'>
        <div>
          Title: { event.title }
        </div>
        <div>
          Description: { event.description }
        </div>
        { user !== null ?
          <Link to='/event' state={{ user: user, event: event }}>Detalle</Link>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default EventCard