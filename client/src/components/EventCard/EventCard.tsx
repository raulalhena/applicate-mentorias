import { useContext } from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function EventCard({ propEvent }) {

  const { user } = useContext(AuthContext);
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
        { user !== undefined ?
          <Link to='/event' state={{ event: event }}>Detalle</Link>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default EventCard