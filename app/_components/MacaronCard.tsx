"use client";

import Image from "next/image";
import { MacaronCardProps } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const MacaronCard = ({ macaron }: MacaronCardProps) => {
  const [count, setCount] = useState(0);

  return (
    <div key={macaron.id} className="flex mt-10">
      <Image
        src={macaron.image}
        alt={macaron.title}
        width={1663}
        height={2500}
        className="rounded-lg"
        style={{ maxWidth: "140px" }}
      />
      <div className="text-center mx-5">
        <h2>{macaron.title}</h2>
        <p className="mb-2">
          <i>{macaron.description}</i>
        </p>
        <p>{macaron.price}</p>
        <div className="flex flex-row justify-center gap-5 mt-2">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <Button className="px-2 mt-2 hover:ring-2 hover:ring-red-400 hover:ring-opacity-100 ring-offset-2">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
