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
          <div id="upperCircle"></div>
          <div
            id="about"
            className=" mt-56 text-[5rem] leading-[6rem] font-bold ml-20 relative flex flex-col"
          >
            <h1 id="name">
              I'm <span className="text-[#00689a]">Lakshay Bhati</span>
            </h1>
            <div id="post">
              <h1 id="react" className="flex items-center gap-5 text-[#00689a]">
                React
                <RiReactjsLine className="hover:animate-spin-slow animate-pulse" />
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
        <div className="right-part">
          <img
            id="profile-img"
            src="./src/assets/Circle_Profile_img.png"
            alt="Dashing Me..!!"
            className=" w-[64rem] absolute -top-[6.5rem] -right-40 -z-10"
          />
        </div>
      </div>
      <div id="journey-sec" className="mt-12 ml-5 p-20">
        <h1 className="text-7xl font-bold underline flex gap-10">
          My Journey <PiArrowFatLinesRightBold className="animate-horizontal" />
        </h1>
        <img
          src="./src/assets/croped_img.jpg"
          alt=""
          className="w-11/12 ml-20 my-20"
        />
        <h1 className="text-5xl mb-5 underline font-semibold">Schooling</h1>
        <p className="text-4xl Fonts-Poppins leading-relaxed">
          I have done my Matriculation and High school studies from D.A.V Public
          School Palwal{" "}
        </p>
        <h1 className="text-5xl mt-10 mb-5 underline font-semibold">
          Graduation
        </h1>
        <p className="text-4xl Fonts-Poppins leading-relaxed">
          After that I got an admission in BCA (Bachelor of Computer
          Applications) in D.A.V Centenary College Faridabad, where I developed
          the skill of coding and started coding in 4th semester with Java
          Programming Language. I complete my graduation in September 2023.
          After graduation I started taking interest in Developing Websites. So
          as to follow my passion I enroll in a training program in a company in
          Faridabad named as Softsynth Software Solution Pvt. Ltd.{" "}
        </p>
      </div>
    </>
  );
};

export default Content;
