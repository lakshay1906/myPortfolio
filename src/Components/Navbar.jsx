import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full top-0 backdrop-blur-xl shadow-lg bg-slate-800 text-[#e6e8eb] py-2 z-10 sticky">
      <ul
        id="li-container"
        className="Fonts-Poppins w-full h-20 py-8 px-20 flex text-[2.9rem] font-semibold gap-32 items-center"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 text-[3.3rem] bg-white px-3 rounded-2xl "
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 text-[3.3rem] bg-white px-3 rounded-2xl "
              : ""
          }
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
