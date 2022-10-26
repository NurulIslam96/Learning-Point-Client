import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blogs from "../components/Blogs/Blogs";
import Checkout from "../components/Checkout/Checkout";
import CourseCardSummary from "../components/Courses/CourseCardSummary";
import CourseDetails from "../components/Courses/CourseDetails";
import CoursesContainer from "../components/Courses/CoursesContainer";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://learning-point-server.vercel.app/courses")
      },
      {
        path: "/courses",
        element: <CourseLayout></CourseLayout>,
        loader: () => fetch("https://learning-point-server.vercel.app/courses"),
        children: [
          {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(
                `https://learning-point-server.vercel.app/courses/${params.id}`
              ),
          },
          {
            path: "/courses",
            element: <CoursesContainer></CoursesContainer>,
            loader: () =>
              fetch("https://learning-point-server.vercel.app/courses"),
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learning-point-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/courseSummary/:id",
        element: <CourseCardSummary></CourseCardSummary>,
        loader: ({ params }) =>
          fetch(
            `https://learning-point-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
]);
