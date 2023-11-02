import Image from "next/image";
import { ProductCardProps } from "@/types";
import Link from "next/link";

export const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <div key={product.id} className="mt-10 flex">
      <Image
        src={product.image}
        alt={product.title}
        width={1663}
        height={2500}
        className="rounded-lg"
        style={{ maxWidth: "200px" }}
      />
      <div className="text-center mx-2">
        <h2>{product.title}</h2>
        <p>
          <i>{product.description}</i>
        </p>
        <Link href={product.links.url} className="flex justify-center"><b>{product.links.titleurl}</b>&nbsp;<Image src="/ui/rightarrow.png" width={16} height={16} alt={product.links.titleurl}/></Link>
      </div>
    </div>
  );
};
