import React from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex items-center space-x-4 text-3xl">
      <a
        href="https://www.linkedin.com/in/lakshay~bhati"
        className="text-white hover:scale-110 transition-all"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/lakshay1906"
        className="text-white hover:scale-110 transition-all"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://codepen.io/lakshay1906"
        className="text-white hover:scale-110 transition-all"
        target="_blank"
      >
        <FaCodepen />
      </a>
    </div>
  );
}

export default SocialLinks;
