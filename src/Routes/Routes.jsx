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
import PrivateRoutes from "./PrivateRoute/PrivateRoute";
import Contact from "../pages/Contact/Contact";
import ShowAllCardLayout from "../Layout/ShowAllCardLayout/ShowAllCardLayout";
// import ShowAllCard from "../pages/ShowAllCards/ShowAllCard";
import ShowAllCards from "../Components/ShowAllCards/ShowAllCards";
import Error from "../Components/Error/Error";


export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            errorElement: <Error></Error>,
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
                    element: <PrivateRoutes>
                        <ProductDetails></ProductDetails>
                    </PrivateRoutes>
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
                    element: <PrivateRoutes>
                        <UpdatePassword></UpdatePassword>
                    </PrivateRoutes>
                },
                {
                    path: "myProfile",
                    element: <PrivateRoutes>
                        <MyProfile></MyProfile>
                    </PrivateRoutes>
                },
                {
                    path: "updateProfile",
                    element: <PrivateRoutes>
                        <UpdateProfile></UpdateProfile>
                    </PrivateRoutes>
                }
            ]
        },
        {
            path: "contact",
            element: <PrivateRoutes>
                <Contact></Contact>
            </PrivateRoutes>
        },
        {
            path: "card",
            element: <ShowAllCardLayout></ShowAllCardLayout>,
            children: [
                {
                    path: "showAllCards",
                    element: <ShowAllCards></ShowAllCards>
                }
            ]
        }
    ]
)