import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import GetEmail from "./GetEmail";

const Footer = () => {
  return (
    <footer className="w-full max-h-full bg-slate-800 flex justify-center text-[#e6e8eb] items-center flex-wrap flex-col lg:flex-row">
      <div id="aboutMe" className="h-5/6 my-20 w-1/2">
        <h1 className="text-8xl font-semibold">Get in touch</h1>
        <h2 className="text-[2.2rem] mt-10">
          I'm a dynamic and results-driven React Developer with a passion for
          crafting exceptional user experiences. Leveraging expertise in
          JavaScript, React, Tailwind CSS, and Bootstrap, I aim to contribute
          innovative solutions to projects while continuously enhancing my
          skills in front-end development. Seeking a challenging role where I
          can apply my technical proficiency and creativity to drive impactful
          results, while collaborating with a team dedicated to excellence in
          web development.
        </h2>
        <div id="links" className="flex gap-x-12 mt-12">
          <a href="https://www.linkedin.com/in/lakshay~bhati" target="_blank">
            <BsLinkedin
              size={"4rem"}
              className="cursor-pointer  hover:scale-125 transition-all"
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
      </div>
      <div
        id="linkBox"
        className="w-[45%] flex h-full text-5xl justify-around my-20"
      >
        <GetEmail />
      </div>
    </footer>
  );
};

export default Footer;
