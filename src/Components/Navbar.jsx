import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowDownShortWide } from "react-icons/fa6";
import QuickLinks from "./QuickLinks";

const Navbar = () => {
  return (
    <nav className="w-full top-0 backdrop-blur-xl shadow-lg bg-slate-800 text-[#e6e8eb] py-2 z-10 sticky flex items-center">
      <ul
        id="li-container"
        className="Fonts-Poppins w-full h-20 py-8 px-20 flex text-[2.9rem] font-semibold gap-32 items-center"
      >
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-[3.3rem] bg-white px-3 py-2 rounded-2xl "
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="group flex flex-col items-center  transition-all">
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-[3.3rem] bg-white px-3 rounded-2xl flex items-center gap-x-4 relative my-2"
                : "flex items-center gap-x-4 relative py-3"
            }
          >
            <span>Projects</span> <FaArrowDownShortWide />
          </NavLink>
          <div className="text-4xl text-white bg-[#292929] absolute -bottom-[9rem] w-fit flex-col items-center rounded-xl py-6 px-5 gap-y-4 hidden group-hover:flex transition-all hover:flex group-active:flex">
            <li>
              <NavLink to="/project">Major Projects</NavLink>
            </li>
            <li>
              <NavLink to="/project/minorProjects">Minor Projects</NavLink>
            </li>
          </div>
        </li>
      </ul>
      <div className="mr-16 ">
        <QuickLinks sc={1} />
      </div>
    </nav>
  );
};

export default Navbar;
