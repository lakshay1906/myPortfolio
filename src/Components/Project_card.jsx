import React from "react";

const Project_card = (props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-5xl font-bold underline underline-offset-2">
        {props.appName}
      </h1>
      <h2 className="text-4xl mt-2">
        <div className="underline">Concepts Used:</div>{" "}
        <div className="ml-56 mt-2">{props.tech}</div>
      </h2>
      <p className="text-4xl Fonts-Poppins leading-tight">
        <div className="underline">Description:</div>{" "}
        <div className="ml-56">{props.desc}</div>
      </p>
      <div className="mt-2 ml-56 text-[2.5rem]">
        <a
          id="sourceCode"
          href={props.code}
          target="_blank"
          className=" text-[#00689a] hover:text-[#21356b] hover:text-[2.8rem] transition-all"
        >
          Source Code
        </a>
      </div>
      <div className="text-4xl underline">
        Demo:
        <video
          src={props.videoLink}
          muted
          loop
          autoPlay
          className="mt-2 w-10/12 mx-auto"
        ></video>
      </div>
    </div>
  );
};

export default Project_card;
