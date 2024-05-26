import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import ResumeBtn from "../MinorComponents/ResumeBtn";
import { LuArrowBigRightDash } from "react-icons/lu";
import TiltComponent from "../MinorComponents/TiltComponent";

function HeroSection() {
  const [typeEffect] = useTypewriter({
    words: ["React Developer", "Web Developer", "UI/UX Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section
      id="home"
      className="text-white py-10 px-10 flex justify-between items-center mt-16"
    >
      <div className="w-1/2 pr-10 ml-5 res-hero-left">
        {/* Left Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">I Am Lakshay Bhati</h1>
          <h1 className="text-3xl font-bold">
            I'm a <span className="text-[#854CE6]">{typeEffect}</span>
          </h1>
          <p className="text-lg mt-5">I'm the one you are looking for ..😊</p>
        </div>
        <ResumeBtn />
        <div className="mt-5 flex flex-col gap-y-1 text-xl">
          <p className="flex items-center gap-1">
            Phone
            <LuArrowBigRightDash />
            +91 9813173434
          </p>
          <p id="skills" className="flex items-center gap-1">
            Email
            <LuArrowBigRightDash />
            lakshaybhati1906@gmail.com
          </p>
        </div>
      </div>
      <div className="lg:mr-20 rounded-full res-hero-right">
        {/* Right Section */}
        <TiltComponent imgSrc={"../assets/profile_pic.jpg"} />
      </div>
    </section>
  );
}

export default HeroSection;
