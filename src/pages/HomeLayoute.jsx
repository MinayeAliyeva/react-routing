import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeLayoute = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => isActive && "aktiv"} to="/">
          Ana Sayfa
        </NavLink>
        <NavLink className={({ isActive }) => isActive && "aktiv"} to="/profile">
        Profile
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
          {({ isActive }) => <>Blog {isActive && "activ"}</>}
        </NavLink>
        <Outlet/>
      </nav>
    </>
  );
};

export default HomeLayoute;
