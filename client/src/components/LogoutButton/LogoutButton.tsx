import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function LogoutButton() {

  const { logoutUser } = useContext(AuthContext);

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default LogoutButton