function LogoutButton({ logoutUser }) {
  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default LogoutButton