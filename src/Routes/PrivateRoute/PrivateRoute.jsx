import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigation();
    console.log(loading);
    if(loading){
        return <div>loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;