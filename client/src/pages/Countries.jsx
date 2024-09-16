import CardCountry from "../components/CardCountry";

export default function Countries() {
  return (
    <div className="w-[100%] h-[100%] text-white">
      <h1 className="w-[100%] p-5 text-center text-[40px] font-bold">Countries</h1>
      <div className="grid gap-10 p-8 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        <CardCountry />
      </div>
    </div>
  );
}
