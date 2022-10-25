import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Courses from "../components/Courses/Courses";
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
               element: <Courses></Courses> 
            },
            {
               path: '/faq',
               element: <Courses></Courses> 
            },
            {
               path: '/blog',
               element: <Courses></Courses> 
            },
            {
               path: '/login',
               element: <Login></Login>
            }
        ]
    }
])