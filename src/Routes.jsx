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
    name: "home",
    children: [
      {
        name: "index",
        index: true,
        element: <Home />,
      },
      {
        name: "contact",
        path: "contact",
        element: <Contact />,
        // admin:true
      },
      {
        name: "blog",
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            name: "index",
            index: true,
            element: <Blog />,
          },
          {
            name: "catagories",
            path: "catagories",
            element: <Catagories />,
          },
          {
            name: "post",
            path: "post/:id/:url",
            element: <Post />,
          },
          {
            name: "error",
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      { name: "profile", path: "profile", element: <Profile />, auth: true },
    ],
  },
  {
    name:"auth",
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        name:"login",
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    name:"error",
    path: "*",
    element: <Error />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      console.log(route.element);
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
