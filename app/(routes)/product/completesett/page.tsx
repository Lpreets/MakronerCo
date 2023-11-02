import { FerdigsettCard } from "@/app/_components/FerdigsettCard";
import { completesetts } from "@/constants";

const Page = () => {
  return (
    <>
    <h1 className="text-center mt-10">Ferdigsett</h1>
    <div className="flex flex-wrap justify-center mb-20 mx-10">
      {completesetts.map((completesett) => (
        <FerdigsettCard key={completesett.id} completesett={completesett} />
      ))}
    </div>
    </>
  );
};

export default Page;