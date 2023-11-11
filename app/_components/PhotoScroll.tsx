import React from "react";
import { macarons } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const PhotoScroll = () => {
  return (
    <div>
    <div className="mt-8">
        <h1 className="text-center text-3xl text-red-900">Presenterer</h1>
      <div className="flex flex-col justify-center  mx-8">
      <h2 className="text-center text-2xl my-4 text-slate-600">Franske Makroner</h2>
        <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
          <div className="flex w-max space-x-2 p-2">
            {macarons.map((macaron) => (
              <figure key={macaron.id} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={macaron.image}
                    alt={`Photo by ${macaron.title}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={150}
                    height={250}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Smak{" "}
                  <span className="font-semibold text-foreground">
                    {macaron.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
    <div className="mt-8">
      <div className="flex flex-col justify-center  mx-8">
      <h2 className="text-center text-2xl my-4 text-slate-600">Veganske Makroner</h2>
        <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
          <div className="flex w-max space-x-2 p-2">
            {macarons.map((macaron) => (
              <figure key={macaron.id} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={macaron.image}
                    alt={`Photo by ${macaron.title}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={150}
                    height={250}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Smak{" "}
                  <span className="font-semibold text-foreground">
                    {macaron.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
    </div>
  );
};

export default PhotoScroll;
