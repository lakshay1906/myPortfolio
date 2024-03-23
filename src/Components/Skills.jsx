import React from "react";

const Skills = () => {
  return (
    <>
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

export default Skills;
