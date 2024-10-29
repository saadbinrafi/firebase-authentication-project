import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';


export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()


    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
        
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        
       
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    } 



    const authInfo ={
        registerUser,
        loginUser,
        logOut,
        user,
        setUser,
        googleLogin,

    }


    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              console.log(currentUser);
              // ...
            } else {
              // User is signed out
              // ...
              console.log(logOut)
            }
          });
    },[])




    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Authprovider;