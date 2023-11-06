"use client";

import React, { useState } from "react";
import { information } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Information = () => {
  const [expanded, setExpanded] = useState(information[0].id);

  return (
    <main>
      <h1 className="text-center mt-10 text-4xl text-pink-900">FAQ</h1>
      <div className="flex md:flex-row flex-col">
        <div className="w-1/2 border-r-2 border-slate-950 p-6">
          <Accordion type="single" collapsible className="w-full">
            {information.map((info) => (
            <AccordionItem key={info.title} value={info.title}>
              <AccordionTrigger>{info.title}</AccordionTrigger>
              <AccordionContent>
              {info.description} <a href="" onClick={(e) => { e.preventDefault(); setExpanded(info.id); }}> <i>read more...</i></a>
              </AccordionContent>
            </AccordionItem>
              ))}
          </Accordion>
        </div>
        <div className="w-1/2 p-6">
          {information.map((info) => (
            info.id === expanded && (
            <div key={info.id} className="space-y-2">
              <h3 className="text-center">{info.expand.title}</h3>
              <p>{info.expand.description}</p>
            </div>
            )
          ))}
        </div>
      </div>
    </main>
  );
};

export default Information;
