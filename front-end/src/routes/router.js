import { createBrowserRouter } from "react-router-dom";

// Shop Router Path
import App from "../App";
import ErrorPage from "../pages/shop/ErrorPage";
import Home from "../pages/shop/Home";
import Blogs from "../pages/shop/Blogs";
import Login from "../pages/shop/Login";
import Product from "../pages/shop/Product";
import Products from "../pages/shop/Products";

// Dashboard Admin Router Path

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
]);
