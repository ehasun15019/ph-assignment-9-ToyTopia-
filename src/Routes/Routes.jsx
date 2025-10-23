import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import ProductDetailsLayout from "../Layout/ProductDetailsLayout/ProductDetailsLayout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdatePassword from "../pages/UpdatePassword/UpdatePassword";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";


export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    element: <Home></Home>,
                }
            ]
        },
        {
            path: "product",
            element: <ProductDetailsLayout></ProductDetailsLayout>,
            children: [
                {
                    path: "productDetails/:id",
                    element: <ProductDetails></ProductDetails>
                }
            ]
        },
        {
            path: "auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "login",
                    element: <Login></Login>
                },
                {
                    path: "register",
                    element: <Register></Register>
                },
                {
                    path: "updatePassword",
                    element: <UpdatePassword></UpdatePassword>
                },
                {
                    path: "myProfile",
                    element: <MyProfile></MyProfile>
                },
                {
                    path: "updateProfile",
                    element: <UpdateProfile></UpdateProfile>
                }
            ]
        }
    ]
)