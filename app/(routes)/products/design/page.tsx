import Image from "next/image";
import Link from "next/link";
import React from "react";

const Design = () => {
  return (
    <main>
      <h1 className="mt-10 text-center">Personlig Design</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-10 mb-20 mx-10">
        <Image
          src="/contact.jpg"
          alt=""
          width={1663}
          height={2500}
          className="md:w-1/2 rounded-lg"
          style={{ maxHeight: "600px" }}
        />
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            error repellendus corrupti repellat accusamus est doloribus, totam
            et maiores doloremque placeat. Nam ipsum similique natus culpa
            ducimus laboriosam eum iusto?
          </p>
          <h3>Loren ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laborum repellendus, excepturi a animi explicabo, aut ullam,
            repellat voluptate consectetur facilis voluptates! Animi ex qui
            necessitatibus molestias praesentium, nisi repudiandae!
          </p>
          <h3>Loren ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laborum repellendus, excepturi a animi explicabo, aut ullam,
            repellat voluptate consectetur facilis voluptates! Animi ex qui
            necessitatibus molestias praesentium, nisi repudiandae!
          </p>
          <Link href="/product/design">
            <b className="flex items-center">
              Kontakt oss&nbsp;
              <Image
                src="/assets/rightarrow.png"
                alt=""
                width={16}
                height={16}
              />
            </b>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Design;
