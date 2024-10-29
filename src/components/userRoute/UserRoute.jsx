import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Navigate } from 'react-router-dom';

const UserRoute = ( {children} ) => {



    console.log(children)
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default UserRoute;