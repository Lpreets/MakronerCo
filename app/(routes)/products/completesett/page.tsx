import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { simpliefiedProduct } from "@/app/interface";
import Link from "next/link";
import AddToCartMulti from "@/app/_components/AddToCartMulti";

async function getData() {
  const query = `*[_type == "completesett" ] {
    _id,
    name,
    image,
    price,
    'slug': slug.current,
    'imageUrl': images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const CompleteSett = async () => {
  const data: simpliefiedProduct[] = await getData();

  return (
    <div className="mx-8 mt-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">Våre Komplett Sett</h1>
      <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
        <div className="flex w-max space-x-2 p-2">
          {data.map((sett) => (
            <figure key={sett._id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Link key={sett._id} href={`/products/completesett/${sett.slug}`} >
                <Image
                  src={urlFor(sett.imageUrl).url()}
                  alt={`Photo by ${sett.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={250}
                  height={350}
                />
                </Link>
              </div>
              <div className="flex flex-col justify-center text-center pt-2">
                <span className="font-semibold text-foreground">
                  {sett.name}
                </span>
                <figcaption className="text-muted-foreground">
                  {sett.price} kr/stk
                </figcaption>
                <AddToCartMulti name={sett.name} image={sett.imageUrl} price={sett.price} currency="NOK" price_id={sett.price_id} />
              </div >
              <div className="flex justify-center mt-4">
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CompleteSett;
