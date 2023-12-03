import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog/BlogLayout";
import Post from "./pages/blog/Post";
import Catagories from "./pages/blog/Catagories";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Blog404 from "./pages/blog/Blog404";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/auth/Login";
import AuthLayout from "./pages/auth/AuthLayout";
import HomeLayoute from "./pages/HomeLayoute";


const routes = [
  {
    path: "/",
    element: <HomeLayoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: "catagories",
            element: <Catagories />,
          },
          {
            path: "post/:id/:url",
            element: <Post />,
          },
          {
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;