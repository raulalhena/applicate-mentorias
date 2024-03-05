import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

function LoginButton() {

  const { loginUser } = useContext(AuthContext);

  return (
    <div>
      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default LoginButton