import React from "react";
import Tilt from "react-parallax-tilt";
import VideoPlayer from "./VideoPlayer";

const TiltComponent = ({ videoLink, imgSrc, link }) => {
  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      className={"flex justify-center items-center z-10 rounded-lg"}
    >
      {videoLink && (
        <VideoPlayer className="" videoSrc={videoLink} gitLink={link} />
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          className="w-[24rem]  mx-auto rounded-full res-hero-img"
        />
      )}
    </Tilt>
  );
};

export default TiltComponent;
