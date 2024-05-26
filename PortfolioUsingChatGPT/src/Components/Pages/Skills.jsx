import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import Heading from "../MinorComponents/Heading";

const Skill = ({ skill, percent }) => {
  return (
    <div id={skill} className="flex flex-col gap-y-5">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">{skill}</div>
        <div>{percent}</div>
      </div>
      <span className="w-full h-2 bg-slate-800 rounded-xl overflow-hidden">
        <div
          className={`w-[${percent}] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
        ></div>
      </span>
    </div>
  );
};

function Skills() {
  return (
    <>
      <Heading text={"Skills"} />
      <div className="bg-white text-black mx-36 rounded-lg py-5 text-xl px-8 flex flex-col gap-y-6 pb-8 res-skill">
        {/* HTML */}
        <div id="HTML" className="flex flex-col ">
          <div className="flex justify-between items-end">
            <div className="flex gap-x-2 items-center font-semibold">
              HTML
              <ImHtmlFive color="#DD4B25" size={"2.2rem"} />
            </div>
            <div>90%</div>
          </div>
          <span className="w-full h-[0.31rem] bg-slate-800 rounded-xl overflow-hidden mt-1">
            <div
              className={`w-[90%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
            ></div>
          </span>
        </div>
        {/* CSS */}
        <div id="CSS" className="flex flex-col ">
          <div className="flex justify-between items-end">
            <div className="flex gap-x-2 items-center font-semibold">
              CSS
              <IoLogoCss3 color="#0068ba" size={"2.2rem"} />
            </div>
            <div>80%</div>
          </div>
          <span className="w-full h-[0.31rem] bg-slate-800 rounded-xl overflow-hidden mt-1">
            <div
              className={`w-[80%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
            ></div>
          </span>
        </div>
        {/* Tailwind */}
        <div id="Tailwind" className="flex flex-col">
          <div className="flex justify-between items-end">
            <div className="flex gap-x-2 items-center font-semibold">
              Tailwind CSS
              <SiTailwindcss color="#38BDF8" size={"2.2rem"} />
            </div>
            <div>77%</div>
          </div>
          <span className="w-full h-[0.31rem] bg-slate-800 rounded-xl overflow-hidden mt-1">
            <div
              className={`w-[77%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
            ></div>
          </span>
        </div>
        {/* Javascript */}
        <div id="Javascript" className="flex flex-col">
          <div className="flex justify-between items-end">
            <div className="flex gap-x-2 items-center font-semibold">
              Javascript
              <SiJavascript color="#ECDA1D" size={"2.2rem"} />
            </div>
            <div>75%</div>
          </div>
          <span className="w-full h-[0.31rem] bg-slate-800 rounded-xl overflow-hidden mt-1">
            <div
              className={`w-[75%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
            ></div>
          </span>
        </div>
        {/* React */}
        <div id="React" className="flex flex-col">
          <div className="flex justify-between items-end">
            <div className="flex gap-x-2 items-center font-semibold">
              React
              <RiReactjsLine color="#00689a" size={"2.2rem"} />
            </div>
            <div>72%</div>
          </div>
          <span className="w-full h-[0.31rem] bg-slate-800 rounded-xl overflow-hidden mt-1">
            <div
              id="projects"
              className={`w-[72%] h-full bg-gradient-to-r from-[#090979] to-[#00d4ff] rounded-xl`}
            ></div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Skills;
