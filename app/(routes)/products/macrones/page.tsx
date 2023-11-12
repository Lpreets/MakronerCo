import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { simpliefiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import AmountCart from "@/app/_components/AmountCart";

async function getData() {
  const query = `*[_type == 'macron'] {
        _id,
          name,
          price,
          'slug': slug.current,
          'imageUrl': images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

const MacronesPage = async () => {
  const data: simpliefiedProduct = await getData();

  return (
    <div className="mx-8 mt-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">Våre Smaker</h1>
      <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
        <div className="flex w-max space-x-2 p-2">
          {data.map((macaron) => (
            <figure key={macaron._id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
              <Link href={`/products/macrones/${macaron.slug}`}>
                <Image
                  src={macaron.imageUrl}
                  alt={`Photo by ${macaron.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={250}
                  height={350}
                />
                  </Link>
              </div>
              <div className="flex flex-col justify-center text-center pt-2">
                <span className="font-semibold text-foreground">
                  {macaron.name}
                </span>
                <figcaption className="text-muted-foreground">
                  {macaron.price} kr/stk
                </figcaption>
                <AmountCart data={data} />
              </div>
              <div className="flex justify-center mt-4">
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex justify-center mt-8">
      </div>
    </div>
  );
};

export default MacronesPage;
