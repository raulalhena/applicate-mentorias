import { useState } from "react"
import { Link } from "react-router-dom"
import LoginButton from "../../components/LoginButton/LoginButton";

function Home() {

  const [ user, setUser ] = useState(null);

  const loginUser = async () => {
    const resp = await fetch('http://localhost/auth', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: 'r@example.com',
        password: '1234'
      })
    });
    const res = resp.json();
    setUser(res);
  }

  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
      { !user ?
        <LoginButton loginUser={ loginUser } />
        :
        <>
          <li><Link to='/user' >User</Link></li>
          <li><Link to='/users' >Users</Link></li>
          <li><Link to='/events' >Events</Link></li>
          <li><Link to='/event' >Event</Link></li>
        </>
      }
      </ul>
    </div>
  )
}

export default Home