import React, { useState } from "react";
import SocialLinks from "../MinorComponents/SocialLinks";

function Navbar({ scrolled }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${
        scrolled ? "bg-[#0d0d25]" : "bg-transparent"
      } text-white py-4 px-7 flex justify-between items-center fixed top-0 w-full transition-all z-20`}
    >
      <div className="text-white font-bold text-xl w-12 -m-3 -ml-1">
        <img src="./assets/logo.png" alt="logo" className="w-full h-full" />
      </div>
      <ul className="flex items-center gap-x-5 text-xl res-links">
        <li className="hover-Effect">
          <a href="#home" className="text-white hover:text-gray-200">
            Home
          </a>
        </li>
        <li className="hover-Effect">
          <a href="#skills" className="text-white hover:text-gray-200">
            Skills
          </a>
        </li>
        <li className="hover-Effect">
          <a href="#projects" className="text-white hover:text-gray-200">
            Projects
          </a>
        </li>
        <li className="hover-Effect">
          <a href="#education" className="text-white hover:text-gray-200">
            Education
          </a>
        </li>
        <li className="hover-Effect">
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </li>
      </ul>
      <div
        className="toggle-menu hidden "
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div
          className={`flex flex-col gap-1 transition-all ${
            toggleMenu && "toggleTrue relative"
          }`}
        >
          <div
            className={`w-5 h-[0.2rem] bg-white rounded-xl ${
              toggleMenu && "line-1"
            }`}
          ></div>
          <div
            className={`w-5 h-[0.2rem] bg-white rounded-xl ${
              toggleMenu && "line-2"
            }`}
          ></div>
          <div
            className={`w-5 h-[0.2rem] bg-white rounded-xl ${
              toggleMenu && "line-3"
            }`}
          ></div>
        </div>
        {toggleMenu && (
          <div className="vertical-menu w-full bg-white text-black h-[94.3vh] fixed left-0 bottom-0 ">
            <ul className="w-full h-full flex flex-col items-center justify-center">
              <li className="hover-Effect">
                <a href="#home" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <div className="w-11/12 h-1 bg-[#090917]  my-6"></div>
              <li className="hover-Effect">
                <a href="#skills" className="hover:text-gray-200">
                  Skills
                </a>
              </li>
              <div className="w-11/12 h-1 bg-[#090917]  my-6"></div>
              <li className="hover-Effect">
                <a href="#projects" className="hover:text-gray-200">
                  Projects
                </a>
              </li>
              <div className="w-11/12 h-1 bg-[#090917]  my-6"></div>
              <li className="hover-Effect">
                <a href="#education" className="hover:text-gray-200">
                  Education
                </a>
              </li>
              <div className="w-11/12 h-1 bg-[#090917]  my-6"></div>
              <li className="hover-Effect">
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="social-links">
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;
