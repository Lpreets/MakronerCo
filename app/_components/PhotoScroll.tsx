import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { simpliefiedProduct } from "../interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'macron'] {
    _id,
      name,
      'slug': slug.current,
      'imageUrl': images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const PhotoScroll = async () => {
  const data: simpliefiedProduct[] = await getData();

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-center text-3xl text-red-900">Presenterer</h1>
        <div className="flex flex-col justify-center mx-8">
          <h2 className="text-center text-2xl my-4 text-slate-600">
            Franske Makroner
          </h2>
          <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
            <div className="flex w-max space-x-2 p-2">
              {data.map((product) => (
                <figure key={product._id} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <Link href={`/products/macrones/${product.slug}`} >
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={`Photo by ${product.name}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                      width={250}
                      height={350}
                    />
                    </Link>
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Smak{" "}
                    <span className="font-semibold text-foreground">
                      {product.name}
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
          <h2 className="text-center text-2xl my-4 text-slate-600">
            Veganske Makroner
          </h2>
          <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
            <div className="flex w-max space-x-2 p-2">
              {data.map((veganskemakroner) => (
                <figure key={veganskemakroner._id} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={urlFor(veganskemakroner.imageUrl).url()}
                      alt={`Photo by ${veganskemakroner.name}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                      width={250}
                      height={350}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Smak{" "}
                    <span className="font-semibold text-foreground">
                      {veganskemakroner.name}
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
