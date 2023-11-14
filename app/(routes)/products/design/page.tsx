import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import { personligDesign } from "@/app/interface";

async function getData() {
  const query = `*[_type == "design"] {
    _id,
    images,
    description,
  }`;

  const data = await client.fetch(query);

  return data;
}

const Design = async () => {
  const data: personligDesign[] = await getData();

  return (
    <main className="mt-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">
        Personlig Design
      </h1>
      {data.map(design => (
      <div key={design._id} className="flex flex-col md:flex-row gap-10 mt-10 mb-20 mx-10">
        <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
          <div className="flex w-max space-x-2 p-2">
            {design.images.map((image: any, idx: any) => (
              <div key={idx} className="overflow-hidden rounded-md">
                <Image
                  src={urlFor(image).url()}
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={250}
                  height={350}
                  placeholder="blur"
                />
              </div>
          ))} 
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h2>Lorem ipsum</h2>
          <p>
            {design.description}
          </p>
          <Link href="/product/design">
            <b className="flex items-center">
              Kontakt oss&nbsp; <ArrowRight />
            </b>
          </Link>
        </div>
      </div>
      ))}
    </main>
  );
};

export default Design;
