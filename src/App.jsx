import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog/BlogLayout";
import {  NavLink } from "react-router-dom";
import Post from "./pages/blog/Post";
import Catagories  from "./pages/blog/Catagories";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => isActive && "aktiv"} to="/">
          Ana Sayfa
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "red" : "transparent",
          })}
          to="/contact"
        >
          Kontakt
        </NavLink>
        <NavLink to="/blog">
          {({isActive})=>(
           <>
           Blog {isActive && 'activ'}
           </>
          )}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />} >
          <Route index={true} element={<Blog/>}/>
          <Route path="catagories" element={<Catagories/>}/>
          <Route path="post/:url" element={<Post/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
