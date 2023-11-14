import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "@/app/lib/sanity";
import { category } from "@/app/interface";
import { products } from "@/constants";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "category" ] {
    _id,
    name,
      image,
      description,
  }`;

  const data = await client.fetch(query);

  return data;
}

const Products = async () => {
  const data: category[] = await getData();

  return (
    <div className="mx-8 mt-8">
      <h1 className="text-center text-3xl text-red-900 mb-8">Våre Produkter</h1>
      <ScrollArea className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
        <div className="flex w-max space-x-2 p-2">
          {data.map((categories) => (
            <figure key={categories._id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={urlFor(categories.image).url()}
                  alt={`Photo by ${categories.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={250}
                  height={350}
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center text-center pt-2">
                <span className="font-semibold text-foreground">
                  {categories.name}
                </span>
              </div>
              <div className="flex justify-center mt-4">
                {products.map(
                  (product) =>
                    product.title === categories.name && (
                      <Link href={product.href} key={product.title}>
                      <Button key={product.title}>
                        {product.title}
                      </Button>
                      </Link>
                    ))}
              </div>
            </figure>
          ))}
        </div>
      <div className="mt-4">
      </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Products;
