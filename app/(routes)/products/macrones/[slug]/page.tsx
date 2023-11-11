// import { fullProduct } from "@/app/interface";
// import { client } from "@/app/lib/sanity";
import React from "react";
// import Counter from "@/app/_components/Counter";
// import AddToCart from "@/app/_components/AddToCart";
// import ImageGallery from "@/app/_components/ImageGallery";

// async function getData(slug: string) {
//   const query = `*[_type == 'product' && slug.current == '$slug'] {
//     _id,
//       name,
//       'slug': slug.current,
//       'images,
//       price,
//       description,
//   }`;

//   const data = await client.fetch(query);

//   return data;
// }

const Macrone = async ({ params }: { params: { slug: string } }) => {
  // const data: fullProduct = await getData(params.slug);
  const data = params.slug;

  return (
    <div>
      <h1>{data}</h1>
      {/* <div className="mx-8 mt-8">
        <h1 className="text-center text-3xl text-red-900 mb-8">Våre Smaker</h1>
        <div className="w-100 whitespace-nowrap rounded-md border border-black dark:border-gray-600">
          <div className="flex w-max space-x-2 p-2">
            <ImageGallery images={data.images} />
            <figure key={data._id} className="shrink-0">
              <div className="overflow-hidden rounded-md"></div>
              <div className="flex flex-col justify-center text-center pt-2">
                <span className="font-semibold text-foreground">
                  {data.name}
                </span>
                <figcaption className="text-muted-foreground">
                  {data.price} kr/stk
                </figcaption>
              </div>
              <div>
                <Counter />
              </div>
            </figure>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <AddToCart />
        </div>
      </div> */}
    </div>
  );
};

export default Macrone;
