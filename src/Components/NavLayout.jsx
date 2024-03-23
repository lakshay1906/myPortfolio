import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className="mt-10 flex backdrop:blur-2xl justify-between">
      {/* <div id="upperCircle"></div> */}
      <div
        id="left"
        className="flex flex-col w-[20%] items-center text-left gap-y-8 pl-10 backdrop:blur-2xl  h-fit fixed left-0"
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
      <div className=" overflow-y-auto backdrop:blur-2xl pb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
