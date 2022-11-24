import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        {
                             <>
                                <li className='mb-3'><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li className='mb-3'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li className='mb-3'><Link to='/dashboard/wishlist'>My Wishlist</Link></li>
                                <li className='mb-3'><Link to='/dashboard/report'>All Report</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;