import * as React from "react";
import Image from "next/image";
import Hero from "./_components/Hero";
import { macarons } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-center mt-12 mx-8">
      <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
        <div className="flex w-max space-x-4 p-4">
          {macarons.map((macaron) => (
            <figure key={macaron.id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={macaron.image}
                  alt={`Photo by ${macaron.title}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
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
    </main>
  );
}
