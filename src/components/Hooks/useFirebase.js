import { initializeApp } from '@firebase/app';
import React from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { firebaseInitilizeApp } from '../Firebase/firebase.initilize';
import { useEffect } from 'react';

firebaseInitilizeApp()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInwithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const googleLogOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
    }, [])

    return { user, googleLogOut, setUser, signInwithGoogle, isLoading, setIsLoading }
};

export default useFirebase;