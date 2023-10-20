import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../pages/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {index:true, element: <Home />},
            {path: "/products", element: <Products />}
        ]
    }
])

export default router;