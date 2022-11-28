import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useRole from "../../hooks/useRole";


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isSeller, isBuyer] = useRole(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul tabIndex={1} className="menu p-4 w-80 text-base-content">
                        {isAdmin &&
                            <>
                                <li className='mb-3'><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li className='mb-3'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='mb-3'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='mb-3'><Link to='/dashboard/report'>All Report</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li className='mb-3'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='mb-3'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                <li className='mb-3'><Link to='/dashboard/mybookings'>My Bookings</Link></li>
                                <li className='mb-3'><Link to='/dashboard/wishlist'>My Wishlist</Link></li>

                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;