import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../configs/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)

  const loginPopUp = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const createUser = (email,password ) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email , password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }
  ,[])

  const authInfo = {user, loginPopUp, logOut, createUser, signIn}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;