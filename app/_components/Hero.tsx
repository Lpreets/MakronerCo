import Image from "next/image";
import React from "react";
import macarons from "/public/hero/macarons.png";

const Hero = () => {
  return (
    <div className="mx-6">
      <Image
        src={macarons}
        alt=""
        width={300}
        height={300}
        style={{
          position: "absolute",
          zIndex: -1,
          opacity: 0.8,
        }}
      />
      <div className="flex flex-col items-center justify-center h-[250px]">
        <h1 className="text-3xl text-rose-800">Veganske Makroner</h1>
        <div className="flex justify-end w-[250px]">
          <span className="text-amber-600">100% Økologisk</span>
          <span className="text-amber-600"><br />100% Nytelse</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
