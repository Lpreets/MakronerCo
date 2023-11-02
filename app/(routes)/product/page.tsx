import { ProductCard } from "@/app/_components/ProductCard";
import { products } from "@/constants";

const Page = () => {
  return (
    <>
    <h1 className="text-center mt-10">Produkter</h1>
    <div className="flex flex-col md:flex-row justify-evenly mx-10 md:mx-0 mb-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default Page;