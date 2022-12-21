import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRole from '../../../hooks/useRole';


const DashboardHome = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, isSeller, isBuyer] = useRole(user?.email);
    
    return (
        <div className='flex flex-col justify-center items-center lg:h-[500px] lg:-mt-20'>
            <h1 className="text-2xl lg:text-5xl font-bold my-7 text-orange-500">Wellcome to OLDBazaar</h1>
            {
                isAdmin && <h1 className="text-2xl">Admin route</h1>
                    
            }
            {
                isSeller && <h1 className="text-2xl">Seller route</h1>
            }
            {
                isBuyer && <h1 className='text-2xl'>Buyer route</h1>
                
            }
        </div>
    );
};

export default DashboardHome;