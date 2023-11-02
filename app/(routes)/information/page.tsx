"use client";

import React, { useState } from "react";
import { information } from "@/constants";

const Page = () => {
  const [active, setActive] = useState(information[0].id);

  return (
    <>
      <div>
        <h1 className="text-center mt-10">FAQ</h1>
      </div>
      <main className="flex flex-col md:flex-row my-10 mx-10">

        {/* Desktop Version */}
        <div className="hidden md:flex">
          <ul className="w-1/2 border-2 border-black divide-solid divide-y divide-black text-center">
            {information.map((info) => (
              <li
                key={info.id}
                className={`cursor-pointer ${
                  active === info.id ? "bg-primary" : ""
                }`}
                onClick={() => setActive(info.id)}
              >
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </li>
            ))}
          </ul>
          <div>
            {information.map((info) => (
              <div
                key={info.id}
                className={`${
                  active === info.id ? "" : "hidden"
                } border border-gray-500 h-full space-y-2`}
              >
                <h2 className="text-center mt-2">{info.expand.title}</h2>
                <p className="mx-4">{info.expand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden">
          {information.map((info) => (
            <div key={info.id} className="border border-black">
              <div
                className={`cursor-pointer ${
                  active === info.id ? "bg-primary" : ""
                }`}
                onClick={() => setActive(info.id)}
              >
                <h3 className="text-center">{info.title}</h3>
                <p className="text-center">{info.description}</p>
              </div>
              {active === info.id && (
                <div className="border border-gray-500 h-full space-y-2">
                  <h2 className="text-center mt-2">{info.expand.title}</h2>
                  <p className="mx-4">{info.expand.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};



export default Page;
