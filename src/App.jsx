import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Link, NavLink } from "react-router-dom";
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
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
