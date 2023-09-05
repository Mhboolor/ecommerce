import { createBrowserRouter } from "react-router-dom";

// Shop Router Path
import App from "../App";
import ErrorPage from "../pages/shop/ErrorPage";
import Home from "../pages/shop/Home";
import Blogs from "../pages/shop/Blogs";
import Login from "../pages/shop/Login";
import Product from "../pages/shop/Product";
import Products from "../pages/shop/Products";
import Dashboard from "../pages/dashboard/Dashboard";

// Dashboard Admin Router Path
import DashboardAdmin from "../pages/dashboard/Login";
import DashboardHome from "../components/dashboard/home/Home";
import Contacts from "../components/dashboard/contacts/Contacts";

export const router = createBrowserRouter([
  // Shop Path
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/login", element: <Login /> },
      { path: "/products", element: <Products /> },
      { path: "/product", element: <Product /> },
    ],
  },

  // Dashboard Path
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "manage-contact", element: <Contacts /> },
    ],
  },
  {
    path: "dashboard/login",
    element: <DashboardAdmin />,
  },
]);
