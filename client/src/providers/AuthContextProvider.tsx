import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../../interfaces/User";

export function AuthContextProvider({ children }) {

  const [ user, setUser ] = useState<User | undefined>(undefined);

  const loginUser = async () => {
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
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loginUser,
      logoutUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}