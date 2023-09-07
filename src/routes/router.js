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
import DashboardBlogs from "../components/dashboard/blogs/Blogs";
import BlogsList from "../components/dashboard/blogs/content/BlogsList";
import UpdateBlog from "../components/dashboard/blogs/content/UpdateBlog";
import BookBlogs from "../components/dashboard/blogs/content/BookBlogs";
import FavBlogs from "../components/dashboard/blogs/content/FavBlogs";

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
      {
        path: "blogs",
        element: <DashboardBlogs />,
        children: [
          { path: "", element: <BlogsList /> },
          { path: "favorit-blogs", element: <FavBlogs /> },
          { path: "book-blogs", element: <BookBlogs /> },
          { path: "update-blog", element: <UpdateBlog /> },
        ],
      },
    ],
  },
  {
    path: "dashboard/login",
    element: <DashboardAdmin />,
  },
]);
