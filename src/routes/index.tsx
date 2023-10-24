import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct, {
  loader as singleProductLoader,
} from "../pages/SingleProduct";
import AdminLayout from "../pages/AdminLayout";
import ProductsTable from "../pages/ProductsTable";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <ProductsTable /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
    ],
  },
]);

export default router;
