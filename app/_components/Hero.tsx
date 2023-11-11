"use client"

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logolight from "/public/hero/logolight.gif";
import logodark from "/public/hero/logodark.gif";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
      <Image 
        src={logolight}
        alt=""
        width={900}
        height={900}
        className="px-10 mt-10"
      />
      ) : (
         <Image 
        src={logodark}
        alt=""
        width={900}
        height={900}
        className="px-10 mt-10"
      />
      )}
    </div>
  );
};

export default Hero;
