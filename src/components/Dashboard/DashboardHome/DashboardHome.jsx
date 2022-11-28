import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRole from '../../../hooks/useRole';


const DashboardHome = () => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller] = useRole(user?.email);
    
    return (
        <div>
            <h1 className=''>jfjfjdfj</h1>
        </div>
    );
};

export default DashboardHome;