import { createContext, useEffect, useState} from "react";
import { logoutUser, loginUser, signUpUser } from "../utils/api/api.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  token: null,
  setToken: () => {},
})


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(null)


  const logout = async (token) => {
    await logoutUser(token)
    .then(() => {
      setCurrentUser(null)
      setToken(null)
    })
  }

  const login = async (email, password) => {
    await loginUser(email, password)
    .then((data) => {
      setCurrentUser(data.user.name)
      setToken(data.token)
    })
  }

  const signUp = async (name, email, password) => {
    await signUpUser(name, email, password)
    .then((data) => {
      setCurrentUser(data.user.name)
      setToken(data.token)
    })
  }

  const value = { 
    currentUser, 
    logout,
    login,
    signUp,
    token
  }

  return (
    <AuthContext.Provider value = {value}>
      { children }
    </AuthContext.Provider>
  )
}