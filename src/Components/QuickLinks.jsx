import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const QuickLinks = ({ mt, sc }) => {
  return (
    <>
      <div id="links" className="flex gap-x-12" style={{ marginTop: mt }}>
        <a href="https://www.linkedin.com/in/lakshay~bhati" target="_blank">
          <BsLinkedin
            size={"4rem"}
            className="cursor-pointer  hover:scale-125 transition-all"
            onMouseOver={(e) => (e.target.style.scale = scale)}
          />
        </a>
        <a href="https://github.com/lakshay1906" target="_blank">
          <BsGithub
            size={"4rem"}
            className="cursor-pointer hover:scale-125 transition-all"
          />
        </a>
        <a href="https://codepen.io/lakshay1906" target="_blank">
          <FaCodepen
            size={"4rem"}
            className="cursor-pointer hover:scale-125 transition-all"
          />
        </a>
        <a href='mailto:"lakshaybhati1906@gmail.com"' target="_blank">
          <RiMailSendFill
            size={"4rem"}
            className="cursor-pointer hover:scale-125 transition-all"
          />
        </a>
      </div>
    </>
  );
};

export default QuickLinks;
