import React from "react";
import Resume_btn from "./Resume_btn";
import Contact from "./Contact";
import { PiArrowFatLinesRightBold } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";

const Content = () => {
  return (
    <>
      <div id="content" className="w-full flex justify-between">
        <div className="left-part">
          <div
            id="about"
            className=" mt-20 text-[5rem] leading-[6rem] font-bold ml-20 relative flex flex-col"
          >
            <h1 id="name">
              I'm <span className="text-[#00689a]">Lakshay Bhati</span>
            </h1>
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
            src="https://github.com/lakshay1906/myPortfolio/blob/main/src/assets/Circle_Profile_img.png?raw=true"
            alt="Dashing Me..!!"
            className=" w-[60rem] absolute -top-[3rem] -right-32 hover:scale-110 transition-all rounded-full overflow-hidden -z-10"
          />
        </div>
      </div>
      <div
        id="skills"
        className="h-fit py-32 w-full bg-slate-600 mt-28 flex flex-col justify-center items-center gap-y-16"
      >
        <h1 className="text-6xl underline underline-offset-4 text-white">
          Skills
        </h1>
        <div
          id="pro-skills"
          className="bg-white w-10/12 h-4/6 text-4xl flex flex-col gap-y-10 p-10 justify-center rounded-3xl"
        >
          <div id="html" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div>HTML</div> <div>90%</div>
            </div>
            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden animate-[animate_]">
              <div className="w-[90%] h-full bg-green-400 rounded-xl"></div>
            </span>
          </div>
          <div id="css" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div>CSS</div> <div>90%</div>
            </div>
            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[90%] h-full bg-green-400 rounded-xl"></div>
            </span>
          </div>
          <div id="tailwind" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div>Tailwind CSS</div> <div>90%</div>
            </div>
            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[90%] h-full bg-green-400 rounded-xl"></div>
            </span>
          </div>
          <div id="js" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div>Javascript</div> <div>90%</div>
            </div>
            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[90%] h-full bg-green-400 rounded-xl"></div>
            </span>
          </div>
          <div id="react" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div>React JS</div> <div>90%</div>
            </div>
            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[90%] h-full bg-green-400 rounded-xl"></div>
            </span>
          </div>
        </div>
        {/* <div id="comm-skills" className="bg-blue-600 w-10/12 h-1/2"></div> */}
      </div>
    </>
  );
};

export default Content;
