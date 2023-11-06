import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
      <h1 className="text-center mt-10 text-4xl text-pink-900">Hvem er vi?</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-10 mb-20 mx-10">
        <Image
          src="/main.jpg"
          alt=""
          width={1663}
          height={2500}
          className="rounded-lg"
          style={{ maxHeight: "600px" }}
        />
        <div>
          <h2>Loren Ipsum</h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptas ratione consequatur nam veritatis quas molestias, culpa
            deserunt magnam facere sapiente, vero laboriosam porro est rem
            provident totam corporis ipsum?
          </p>
          <h3 className="mt-5">Loren ipsum</h3>

          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            maiores corrupti alias molestiae recusandae ullam saepe
            necessitatibus in excepturi nisi ut nihil beatae suscipit aliquid
            at, obcaecati, molestias fugit laboriosam?
          </p>
          <h3 className="mt-5">Loren ipsum</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            maiores corrupti alias molestiae recusandae ullam saepe
            necessitatibus in excepturi nisi ut nihil beatae suscipit aliquid
            at, obcaecati, molestias fugit laboriosam?
          </p>
        </div>
      </div>
      </div>
    </main>
  );
}
