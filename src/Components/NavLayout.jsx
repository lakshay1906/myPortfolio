import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className="mt-28 flex backdrop:blur-2xl">
      <div id="upperCircle"></div>
      <div
        id="left"
        className="flex flex-col w-[45%] items-center text-left gap-y-8 pl-10 overflow-y-scroll backdrop:blur-2xl"
      >
        <NavLink to="/project" className={"text-5xl font-semibold "}>
          Major Projects ➡️
        </NavLink>
        <NavLink
          to="/project/minorProjects"
          className={"text-5xl font-semibold"}
        >
          Minor Projects ➡️
        </NavLink>
      </div>
      <div className="h-[calc(100vh-1rem)] overflow-y-auto backdrop:blur-2xl pb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
