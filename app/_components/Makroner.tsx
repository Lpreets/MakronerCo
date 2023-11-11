import React from "react";
import { simpliefiedProduct } from "../interface";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Counter from "./Counter";
import AddToCart from "./AddToCart";

async function getData() {
  const query = `* [_type == 'product'] {
    _id,
      name,
      price,
      'slug': slug.current,
      'imageUrl': images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const Makroner = async () => {
  const data: simpliefiedProduct[] = await getData();

  return (
    <div className="mx-8 mt-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">Våre Smaker</h1>
      <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
        <div className="flex w-max space-x-2 p-2">
          {data.map((macaron) => (
            <figure key={macaron._id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={macaron.imageUrl}
                  alt={`Photo by ${macaron.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={150}
                  height={250}
                />
              </div>
              <div className="flex flex-col justify-center text-center pt-2">
                <span className="font-semibold text-foreground">
                  {macaron.name}
                </span>
                <figcaption className="text-muted-foreground">
                  {macaron.price} kr/stk
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
  );
};

export default Makroner;
