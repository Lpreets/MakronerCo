import { MacaronCard } from "@/app/_components/MacaronCard";
import { macarons } from "@/constants";

const Page = () => {
  return (
    <>
    <h1 className="text-center mt-10">Våre Smaker</h1>
    <div className="flex flex-wrap justify-center mb-20 mx-10">
      {macarons.map((macaron) => (
        <MacaronCard key={macaron.id} macaron={macaron} />
      ))}
    </div>
    </>
  );
};

export default Page;