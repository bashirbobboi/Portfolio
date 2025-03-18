import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "AI & Machine Learning Enthusiast",
          "Full-Stack Developer",
          "Open Source Contributor",
          "Cybersecurity & IoT Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
