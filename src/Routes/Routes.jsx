import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import ProductDetailsLayout from "../Layout/ProductDetailsLayout/ProductDetailsLayout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/",
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
        }
    ]
)