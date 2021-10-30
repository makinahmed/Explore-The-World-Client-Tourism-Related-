import React from 'react';
import { useContext } from 'react';
import { ProvideContext } from '../Context/ContextProvider';
import useFirebase from './useFirebase';

const useAuth = () => {
    return useContext(ProvideContext);
};

export default useAuth;