import React from 'react'

function LoginButton({ loginUser }) {
  return (
    <div>
      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default LoginButton