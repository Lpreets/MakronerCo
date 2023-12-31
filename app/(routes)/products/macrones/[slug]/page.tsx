import { client, urlFor } from "@/app/lib/sanity";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import AddToCartMulti from "@/app/_components/AddToCartMulti";
import { fullProduct } from "@/app/interface";

async function getData(slug: string) {
  const query = `*[_type == "macron" && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

const Macrone = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="mt-8 mx-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">{data.name}</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-8 mb-20">
        <div className="rounded-md border border-black dark:border-gray-600">
          <ScrollArea className="w-100 whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-2 p-2">
              {data.images.map((image: any, idx: any) => (
                <div key={idx} className="overflow-hidden rounded-md">
                  <Image
                    src={urlFor(image).url()}
                    alt=""
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={250}
                    height={350}
                    priority={true}
                  />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <p className="text-center">{data.description}</p>
          <figure key={data._id} className="shrink-0">
            <div className="overflow-hidden rounded-md"></div>
            <div className="flex flex-col justify-center text-center pt-2">
              <span className="font-semibold text-foreground">{data.name}</span>
              <figcaption className="text-muted-foreground">
                {data.price} kr/stk
              </figcaption>
            </div>
          </figure>
          <div className="mb-6 mx-2">
            <AddToCartMulti name={data.name} image={urlFor(data.images[0]).url()} price={data.price} price_id={data.price_id} currency="NOK" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macrone;
