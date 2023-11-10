import Image from "next/image";
import React from "react";
import hero from "/public/hero/hero.svg";

const Hero = () => {
  return (
    <div className="">
      <Image 
        src={hero}
        alt="hero"
        width={1280}
        height={720}
        className="px-10 mt-10"
      />
    </div>
  );
};

export default Hero;
