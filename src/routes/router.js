import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import App from "../App";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {path : "/" , element : <App/> , errorElement : <ErrorPage/> , children : [
        {path : "/" , element : <Home/>},
        {path : "/blogs" , element : <Blogs/>},
        {path : "/register" , element : <Register/>},
        {path : "/login" , element : <Login/>}
    ]}
])