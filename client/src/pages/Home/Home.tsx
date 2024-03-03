import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users' >Users</Link></li>
        <li><Link to='/user' >User</Link></li>
        <li><Link to='/events' >Events</Link></li>
        <li><Link to='/event' >Event</Link></li>
      </ul>
    </div>
  )
}

export default Home