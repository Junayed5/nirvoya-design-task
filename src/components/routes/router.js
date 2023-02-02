import { createBrowserRouter } from "react-router-dom";
import Category from "../Category/Category";
import Home from "../Home/Home";
import Main from "../layout/Main";
import ProductDetail from "../ProductDetail/ProductDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/product-detail",
                element:<ProductDetail/>
            },
            {
                path: "/category",
                element: <Category/>
            }
        ]
    }
])