import { useState } from "react"
import EventsList from "../../components/EventsList/EventsList";

function Home() {

  const [ user, setUser ] = useState(null);

  const loginUser = async () => {

    console.log('login')
    const resp = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: 'ra@example.com',
        password: '1234'
      })
    });
    const res = await resp.json();
    setUser(res);
  };

  const logoutUser = async () => {
    setUser(null);
  };

  const props = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser
  }

  return (
    <div>
        <div>User: { user && user.email }</div>
        <EventsList props={ props }/>
    </div>
  )
}

export default Home