import React from "react";
// import "./Resume_btn.css";

const Resume_btn = () => {
  return (
    <>
      <button
        id="resume_btn"
        className="text-white px-6 py-3 ml-24 mt-8 text-4xl bg-[#00689a] border-none rounded-[25px] hover:scale-110 transition-all"
      >
        <a href="./assets/LAKSHAY-resume.pdf" download={"Resume.pdf"}>
          Download Resume
        </a>
      </button>
    </>
  );
};

export default Resume_btn;
