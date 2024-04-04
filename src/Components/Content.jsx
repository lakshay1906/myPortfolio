import React from "react";
import Resume_btn from "./Resume_btn";
import Contact from "./Contact";
import { PiArrowFatLinesRightBold } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import Skills from "./Skills";
import OtherInfo from "./OtherInfo";

const Content = () => {
  return (
    <>
      <div id="content" className="w-full flex justify-between">
        <div className="left-part">
          <div
            id="about"
            className=" mt-20 text-[5rem] leading-[6rem] font-bold ml-20 relative flex flex-col"
          >
            <div id="name">
              <span>I'm</span>{" "}
              <span className="text-[#00689a]">Lakshay Bhati</span>
            </div>
            <div id="post">
              <h1 id="react" className="flex items-center gap-5 text-[#00689a]">
                React
                <RiReactjsLine
                  className="hover:animate-spin-slow animate-pulse"
                  size={"5.5rem"}
                />
              </h1>
              <h1 id="developer" className="">
                Developer
              </h1>
            </div>
          </div>
          <h1 id="text" className="text-3xl ml-[5.5rem] mt-5">
            I'm the one you're looking for..{" "}
            <span id="smiley_emoji" className="text-4xl">
              😊
            </span>
          </h1>
          <Resume_btn />
          <Contact />
        </div>
        <div className="right-part ">
          <img
            id="profile-img"
            src="./src/assets/Circle_Profile_img (4).png"
            alt="Dashing Me..!!"
            className=" w-[60rem] absolute -top-[3rem] -right-32 hover:scale-110 transition-all rounded-full overflow-hidden -z-10"
          />
        </div>
      </div>
      <div
        id="seperator"
        className="w-[90%] mx-auto h-[0.62rem] bg-slate-500 mt-56 rounded-2xl"
      ></div>
      <Skills />
      <div
        id="seperator"
        className="w-[90%] mx-auto h-[0.62rem] bg-slate-500 mb-24 mt-10 rounded-2xl"
      ></div>
      <OtherInfo />
      <div
        id="seperator"
        className="w-[90%] mx-auto h-[0.62rem] bg-slate-500 mb-24 mt-10 rounded-2xl"
      ></div>
    </>
  );
};

export default Content;
