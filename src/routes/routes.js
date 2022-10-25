import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
               path: '/',
               element: <Home></Home>
            },
            {
               path: '/courses',
               element: <Courses></Courses>,
               loader: () => fetch('https://learning-point-server.vercel.app/courses')
            },
            {
               path: '/faq',
               element: <Faq></Faq> 
            },
            {
               path: '/blog',
               element: <Blogs></Blogs>
            },
            {
               path: '/login',
               element: <Login></Login>
            },
            {
               path: '/signup',
               element: <Register></Register>
            }
        ]
    }
])