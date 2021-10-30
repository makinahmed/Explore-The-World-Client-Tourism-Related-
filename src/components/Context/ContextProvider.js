import React from 'react';
import { createContext } from 'react';
import { initilizeFirebaseApp } from '../Firebase/firebase.initilize';
import useFirebase from '../Hooks/useFirebase';
export const ProvideContext = createContext()

const ContextProvider = ({ children }) => {
    const allValues = useFirebase()
    return (
        <ProvideContext.Provider value={allValues}>
            {
                children
            }
        </ProvideContext.Provider>
    );
};

export default ContextProvider;