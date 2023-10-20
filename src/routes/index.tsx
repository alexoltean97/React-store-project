import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Admin from "../pages/Admin";
import Home from "../pages/Home";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        
    },

    {
        path: "/products",
        element: <p>test</p>
    },

    {
        path: "/admin",
        element: <Admin />
    },
])

export default router;