import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../hooks/useRole';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(user);
    const [isSeller,isSellerLoading] = useRole(user?.email);
    const location = useLocation();
    // if(loading || isSellerLoading){
    //     return <Loading></Loading>
    // }
    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;