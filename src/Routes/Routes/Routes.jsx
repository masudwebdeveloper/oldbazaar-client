import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../components/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../components/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import DashboardHome from "../../components/Dashboard/DashboardHome/DashboardHome";
import MyBookingProducts from "../../components/Dashboard/MyBookingProducts/MyBookingProducts";
import MyProducts from "../../components/Dashboard/MyProducts/MyProducts";
import Payment from "../../components/Dashboard/Payment/Payment";
import ReportsProducts from "../../components/Dashboard/ReportsProducts/ReportsProducts";
import WishlistProducts from "../../components/Dashboard/WishlistProducts/WishlistProducts";
import Blogs from "../../components/Home/Blogs/Blogs";
import CategoriesProducts from "../../components/Home/CategoriesProducts/CategoriesProducts";
import Home from "../../components/Home/Home/Home";
import ProductsDetails from "../../components/Home/ProductsDetails/ProductsDetails";
import ErrorPage from "../../components/Others/ErrorPage/ErrorPage";
import Login from "../../components/Shared/Login/Login";
import SignUp from "../../components/Shared/SignUp/SignUp";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoriesProducts></CategoriesProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://old-bazaar-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`https://old-bazaar-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/wishlist',
                element: <BuyerRoute><WishlistProducts></WishlistProducts></BuyerRoute>
            },
            {
                path: '/dashboard/report',
                element: <AdminRoute><ReportsProducts></ReportsProducts></AdminRoute>
            },
            {
                path: '/dashboard/mybookings',
                element: <BuyerRoute><MyBookingProducts></MyBookingProducts></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://old-bazaar-server.vercel.app/bookings/${params.id}`)
            },

        ]
    }
])

export default router;