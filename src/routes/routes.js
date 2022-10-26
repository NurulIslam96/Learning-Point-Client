import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blogs from "../components/Blogs/Blogs";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/Courses/CourseDetails";
import CoursesContainer from "../components/Courses/CoursesContainer";
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
               element: <CoursesContainer></CoursesContainer>,
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
            },
            {
               path: '/courses/:id',
               element: <CourseDetails></CourseDetails>,
               loader: ({params}) => fetch(`https://learning-point-server.vercel.app/courses/${params.id}`)
            },
            {
               path: '/checkout',
               element: <Checkout></Checkout>
            }
        ]
    }
])