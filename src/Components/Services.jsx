import React from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const Services = () => {
  return (
    <div
      id="service-page"
      className="text-6xl w-full h-[calc(100vh-5rem)] mt-20 overflow-y-auto font-bold flex flex-col justify-center items-center leading-relaxed decoration-wavy"
    >
      <div id="upperCircle"></div>
      <h1>Services are yet to come</h1>
      <h1 className="flex items-center gap-5">
        Please Wait!! <FaRegFaceSmileBeam className="text-blue-700" />
      </h1>
    </div>
  );
};

export default Services;
