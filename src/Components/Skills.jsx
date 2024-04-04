import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="h-fit  w-full mt-16 flex flex-col justify-center items-center gap-y-16"
      >
        <h1 className="text-6xl underline underline-offset-4 ">Skills</h1>
        <div
          id="pro-skills"
          className="bg-white w-10/12 h-4/6 text-4xl flex flex-col gap-y-10 p-12 py-20 pt-16 justify-center rounded-3xl"
        >
          <div id="html" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                HTML <ImHtmlFive color="#DD4B25" size={"2.8rem"} />
              </div>
              <div>90%</div>
            </div>

            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden animate-[animate_]">
              <div className="w-[90%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl"></div>
            </span>
          </div>

          <div id="css" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                CSS <IoLogoCss3 color="#0068ba" size={"3rem"} />
              </div>
              <div>82%</div>
            </div>

            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[82%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl"></div>
            </span>
          </div>

          <div id="tailwind" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                Tailwind CSS <SiTailwindcss color="#38BDF8" size={"2.8rem"} />
              </div>
              <div>77%</div>
            </div>

            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[77%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl"></div>
            </span>
          </div>

          <div id="js" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                Javascript <SiJavascript color="#ECDA1D" size={"3rem"} />
              </div>{" "}
              <div>75%</div>
            </div>

            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[75%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl"></div>
            </span>
          </div>

          <div id="react" className="flex flex-col gap-y-5">
            <div className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                React JS <RiReactjsLine color="#00689a" size={"3.1rem"} />
              </div>{" "}
              <div>72%</div>
            </div>

            <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-[72%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl"></div>
            </span>
          </div>
        </div>
        {/* <div id="comm-skills" className="bg-blue-600 w-10/12 h-1/2"></div> */}
      </div>
    </>
  );
};

export default Skills;
