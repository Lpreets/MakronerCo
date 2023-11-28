import React from "react";
import Image from "next/image";
import logo from "/public/hero/logo.gif";

const Hero = () => {

  return (
      <Image
        src={logo}
        alt=""
        width={900}
        height={900}
        className="px-10 mt-10"
        priority={true}
      />
  );
};

export default Hero;
