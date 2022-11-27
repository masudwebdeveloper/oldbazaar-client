import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import MyBookingProducts from "../../components/Dashboard/MyBookingProducts/MyBookingProducts";
import MyProducts from "../../components/Dashboard/MyProducts/MyProducts";
import Payment from "../../components/Dashboard/Payment/Payment";
import ReportsProducts from "../../components/Dashboard/ReportsProducts/ReportsProducts";
import WishlistProducts from "../../components/Dashboard/WishlistProducts/WishlistProducts";
import CategoriesProducts from "../../components/Home/CategoriesProducts/CategoriesProducts";
import Home from "../../components/Home/Home/Home";
import ProductsDetails from "../../components/Home/ProductsDetails/ProductsDetails";
import ErrorPage from "../../components/Others/ErrorPage/ErrorPage";
import Login from "../../components/Shared/Login/Login";
import SignUp from "../../components/Shared/SignUp/SignUp";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";

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
                path: '/categories/:id',
                element: <CategoriesProducts></CategoriesProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
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
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/wishlist',
                element: <WishlistProducts></WishlistProducts>
            },
            {
                path: '/dashboard/report',
                element: <ReportsProducts></ReportsProducts>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyBookingProducts></MyBookingProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            
        ]
    }
])

export default router;