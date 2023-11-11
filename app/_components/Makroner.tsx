import React from 'react'
import { macarons } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Counter from './Counter';
import AddToCart from './AddToCart';

const Makroner = () => {
  return (
    <div className="mx-8 mt-8">
        <h1 className="text-center text-3xl text-red-900 mb-8">Våre Smaker</h1>
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
        <div className="flex flex-col justify-center text-center pt-2">
          <span className="font-semibold text-foreground">
            {macaron.title}
          </span>
        <figcaption className="text-muted-foreground">
            23 kr
        </figcaption>
        </div>
        <div>
            <Counter />
        </div>
      </figure>
      
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
<div className="flex justify-center mt-8">
<AddToCart />
</div>
</div>
  )
}

export default Makroner;


