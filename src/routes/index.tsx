import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layouts/RootLayout";
import Home from "../pages/users/Home";
import Products from "../pages/users/Products";
import SingleProduct, {
  loader as singleProductLoader,
} from "../pages/users/SingleProduct";
import AdminLayout from "../pages/layouts/AdminLayout";
import ProductsTable from "../pages/admin/ProductsTable";
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import SingleProductDetail, {
  loader as singleProductAdminLoader,
} from "../pages/admin/SingleProductDetail";

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
      {
        path: "products/:productId/edit",
        loader: singleProductAdminLoader,
        element: <SingleProductDetail />,
      },
    ],
  },
]);

export default router;
