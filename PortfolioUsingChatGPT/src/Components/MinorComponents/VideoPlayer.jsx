import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const VideoPlayer = ({ videoSrc, gitLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        style={{ width: "100%", height: "auto", borderRadius: "12px" }}
      />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            color: "#fff",
            fontSize: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <a href={gitLink} target="_blank">
            <FaExternalLinkAlt size="1.3rem" className="m-1" />
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
