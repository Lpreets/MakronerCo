"use client"

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logo from "/public/hero/logo.gif";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
      <Image 
        src={logo}
        alt=""
        width={900}
        height={900}
        className="px-10 mt-10"
        priority={true}
      />
      ) : (
         <Image 
        src={logo}
        alt=""
        width={900}
        height={900}
        className="px-10 mt-10"
        priority={true}
      />
      )}
    </div>
  );
};

export default Hero;
