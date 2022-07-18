import { useState, useEffect, useContext, createContext } from "react";

import { auth } from "./../firebase/firebase.config";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)

  if (!context) throw new Error('There is not auth provider...')

  return context
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const [myAlert, setMyAlert] = useState('')

  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      return setMyAlert(error.code);
    }
  }

  const logout = async () => {
    try {
      return await signOut(auth)
    } catch (error) {
      return console.error(error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <authContext.Provider
      value={{
        login,
        user,
        logout,
        loading,
        myAlert,
        setMyAlert
      }}>
      {children}
    </authContext.Provider>
  )
}