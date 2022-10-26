import React from 'react';
import { Navigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = UserContext(AuthContext)
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;