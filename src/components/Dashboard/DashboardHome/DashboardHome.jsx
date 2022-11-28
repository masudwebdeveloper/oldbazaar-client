import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRole from '../../../hooks/useRole';


const DashboardHome = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, isSeller, isBuyer] = useRole(user?.email);
    
    return (
        <div>
            <h1 className="text-5xl">Wellcome to OLDBazaar</h1>
            {
                isAdmin && <div>
                    <h1 className="text-5xl">Admin route Loading...</h1>
                    </div>
            }
            {
                isSeller && <h1 className="text-2xl">Seller route Loading...</h1>
            }
            {
                isBuyer && <div className='min-h-screen'>
                    <h1 className='text-2xl'>Buyer route Loading...</h1>
                </div>
            }
        </div>
    );
};

export default DashboardHome;