import React, { useState } from "react";
import TiltComponent from "../MinorComponents/TiltComponent";
import Heading from "../MinorComponents/Heading";

function Projects() {
  const [major, setMajor] = useState(true);
  const [minor, setMinor] = useState(false);
  function onMajorClick() {
    setMajor(true);
    setMinor(false);
  }
  function onMinorClick() {
    setMajor(false);
    setMinor(true);
  }
  return (
    <>
      <div className="mt-16 res-project-page">
        <Heading text={"Projects"} />
        <div
          id="tab"
          className="mx-auto text-center border border-white w-fit text-lg flex  rounded-3xl overflow-hidden"
        >
          <div
            className={`flex justify-center items-center hover:bg-blue-900 hover:text-white ${
              major && "bg-white text-black font-semibold"
            }`}
            onClick={() => onMajorClick()}
          >
            <button
              className={`hoverUnderline  hover:scale-95 transition-all mx-3 my-[5px] `}
            >
              Major Project
            </button>
          </div>
          <div className="w-[2px] bg-white rounded-xl"></div>
          <div
            className={`flex justify-center items-center hover:bg-blue-900 ${
              minor && "bg-white text-black font-semibold"
            }`}
            onClick={() => onMinorClick()}
          >
            <button className="hoverUnderline  hover:scale-95 transition-all  mx-3 my-[5px]">
              Minor Project
            </button>
          </div>
        </div>
        <div className="border border-white w-fit h-fit mx-16 mb-16 mt-5 px-10 rounded-xl py-5 shadow-2xl res-projects">
          {major && (
            <div className="w-[100%] h-full mx-auto grid grid-cols-2 gap-y-5 gap-x-5 pro-grid">
              <TiltComponent
                videoLink="./assets/Shopping_App_Demo.mp4"
                link={"https://online-dukaan.netlify.app/"}
              />
              <TiltComponent
                videoLink="./assets/Weather-app.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Weather-app"
                }
              />
              <TiltComponent
                videoLink="./assets/Todo-App.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/To%20Do%20Application"
                }
              />
              <TiltComponent
                videoLink="./assets/Password_generator.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Password-Generator"
                }
              />
              <TiltComponent
                videoLink="./assets/SPS_Game.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Stone%2C%20Paper%2C%20Scissor%20Game"
                }
              />
              <TiltComponent
                videoLink="./assets/Netflix.com.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Netflix.com"
                }
              />
            </div>
          )}
          {minor && (
            <div className="w-[100%] h-full mx-auto grid grid-cols-2 gap-y-5 gap-x-5 pro-grid">
              <TiltComponent
                videoLink="./assets/Currency_Converter.mp4"
                link={
                  "https://github.com/lakshay1906/All-Practice-Code/tree/main/react/CurrencyConverter"
                }
              />
              <TiltComponent
                videoLink="./assets/BgChanger.mp4"
                link={
                  "https://github.com/lakshay1906/All-Practice-Code/tree/main/react/bgChanger"
                }
              />
              <TiltComponent
                videoLink="./assets/Movie_cards.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Movie_card"
                }
              />
              <TiltComponent
                videoLink="./assets/Stopwatch.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Stopwatch"
                }
              />
              <TiltComponent
                videoLink="./assets/QR_Code.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/QR%20Code%20Generator"
                }
              />
              <TiltComponent
                videoLink="./assets/Tell_me_a_joke.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Tell%20Me%20a%20Joke"
                }
              />
              <TiltComponent
                videoLink="./assets/Calculator.mp4"
                link={
                  "https://github.com/lakshay1906/Projects/tree/main/Calculator"
                }
              />
            </div>
          )}
          <div id="education"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
