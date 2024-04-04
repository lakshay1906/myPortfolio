import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import QuickLinks from "./QuickLinks";
import GetEmail from "./GetEmail";

const Footer = () => {
  return (
    <footer className="w-full max-h-full bg-slate-800 flex justify-center text-[#e6e8eb] items-center flex-wrap z-20">
      <div id="aboutMe" className="h-5/6 my-20 w-1/2">
        <h1 className="text-8xl font-semibold">Get in touch</h1>
        <h2 className="text-[2.2rem] mt-10" id="summary">
          I'm a dynamic and results-driven React Developer with a passion for
          crafting exceptional user experiences. Leveraging expertise in
          JavaScript, React, Tailwind CSS, and Bootstrap, I aim to contribute
          innovative solutions to projects while continuously enhancing my
          skills in front-end development. Seeking a challenging role where I
          can apply my technical proficiency and creativity to drive impactful
          results, while collaborating with a team dedicated to excellence in
          web development.
        </h2>
        <QuickLinks mt={"3rem"} />
      </div>
      <div
        id="linkBox"
        className="w-[45%] flex flex-col h-full text-5xl justify-around mb-5 gap-y-10"
      >
        <h2>Drop your message:</h2>
        <GetEmail />
      </div>
    </footer>
  );
};

export default Footer;

// .sendForm("service_1cxdr0r", "template_2d7ym2v", templateParams, {
//   publicKey: "B0h7MNQ6ST48kHj2W",
// })
