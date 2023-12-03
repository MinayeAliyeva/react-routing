import "./App.css";
import { Route, Routes } from "react-router";
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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayoute />}>
          <Route index={true} element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<BlogLayout />}>
            <Route index={true} element={<Blog />} />
            <Route path="catagories" element={<Catagories />} />
            <Route path="post/:id/:url" element={<Post />} />
            <Route path="*" element={<Blog404 />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
