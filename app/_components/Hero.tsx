import Image from "next/image";
import React from "react";
import macarons from "/public/hero/macarons.png";

const Hero = () => {
  return (
    <div className="">
      <Image
        src={macarons}
        alt=""
        width={200}
        height={200}
        className="mt-10"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      />
      <div className="flex flex-col items-center justify-center h-[220px] ml-16">
        <h1 className="text-2xl text-rose-800 ml-4">Veganske Makroner</h1>
        <div className="flex justify-end">
          <span className="text-amber-600 ml-4">100% Økologisk</span>
          <span className="text-amber-600"><br />100% Nytelse</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
