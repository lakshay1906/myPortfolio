import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[103%] absolute top-0 backdrop-blur-xl shadow-lg">
      <ul
        id="li-container"
        className="Fonts-Poppins w-full h-20 py-8 px-20 flex text-[2.9rem] font-semibold gap-32 items-center"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-700 text-[3.3rem]" : " text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-red-600 text-[3.3rem]" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-red-600 text-[3.3rem]" : "text-black"
          }
        >
          Services
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
