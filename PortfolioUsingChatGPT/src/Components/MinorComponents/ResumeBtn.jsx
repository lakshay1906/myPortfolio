import React from "react";

function ResumeBtn() {
  return (
    <>
      <div className="resume-btn-parent relative h-12 w-60  rounded-3xl flex justify-center items-center">
        <button className="resume-btn m-0 p-0 absolute top-[0.06rem] left-[0.13rem] rounded-3xl px-4 py-1 text-xl z-10 overflow-hidden hover:text-white delay-200  w-[98.4%] h-[95%] bg-[#070836] border-none">
          <a href="../assets/Lakshay-resume.pdf" download={"Lakshay_Resume"}>
            Download Resume
          </a>
        </button>
      </div>
    </>
  );
}

export default ResumeBtn;
