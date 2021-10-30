import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const GoogleSignIn = () => {
    const { setUser, isLoading, setIsLoading } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const { signInwithGoogle } = useAuth()
    const redirect_uri = location.state?.from || '/home'


    const googleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user)
                history.push(redirect_uri);
            })
            .finally(()=> setIsLoading(false))
            
    }



    return (
        <div style={{ width: '500px', height: '500px', margin: '200px auto' }}>

            <h1 className="my-5">Please Sign In With Google</h1>

            <Link to="/login">

                <button onClick={googleSignIn}><img style={{ width: '10%' }} src="https://w7.pngwing.com/pngs/937/156/png-transparent-google-logo-google-search-google-account-redes-search-engine-optimization-text-service.png" alt="" /> Google SignIn</button></Link>
        </div>
    );
};

export default GoogleSignIn;