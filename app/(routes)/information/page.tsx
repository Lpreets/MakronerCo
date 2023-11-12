import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/app/lib/sanity";
import { information } from "@/app/interface";

async function getData() {
  const query = `*[_type == "information" ] {
    _id,
      name,
      descriptionshort,
      descriptionlong
  }`;

  const data = await client.fetch(query);

  return data;

}

const InformationPage = async () => {
  const data: information = await getData();

  return (
    <main>
      <h1 className="text-center mt-10 text-3xl text-red-900">FAQ</h1>
      <div className="flex md:flex-row flex-col">
        <div className=" border-r-2 border-slate-950 p-6 md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {data.map((info) => (
            <AccordionItem key={info.name} value={info.name}>
              <AccordionTrigger>{info.name}</AccordionTrigger>
              <AccordionContent>
              {info.descriptionshort}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-1/2 p-6 hidden md:block">
        {data.map((info) => (
            <div key={info._id} className="space-y-2">
              <h3 className="text-center">{info.name}</h3>
              <p>{info.descriptionlong}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InformationPage;
