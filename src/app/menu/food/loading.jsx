import Table from "@/components/ui/data-table";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="animate-pulse">
      <div className="bg-gray-300 w-full h-80" />
      <section className="mx-5 my-4 gap-4 flex flex-col items-start mt-6">
        <div className="bg-gray-300 w-[180px] h-[30px] rounded-sm" />
        <div className="bg-gray-300 w-[170px] h-[26px] rounded-sm"></div>
        <div className="bg-gray-300 h-[25px] w-full rounded-sm" />
        <div className="bg-gray-300 h-[25px] w-full rounded-sm" />
        <div className="bg-gray-300 h-[25px] w-full rounded-sm" />
        <div className="bg-gray-300 h-[25px] w-full rounded-sm" />
      </section>

      <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

      <div className="bg-gray-200 mx-5 rounded-lg overflow-clip">
        <div className=" flex flex-row">
          <div className="bg-gray-200 w-full h-16" />
          <div className="bg-gray-200 w-full h-16" />
        </div>
        <div className="h-1 bg-gray-50 w-full  mx-auto" />
        <div className=" flex flex-row">
          <div className="bg-gray-200 w-full h-16" />
          <div className="bg-gray-200 w-full h-16" />
        </div>
      </div>
    </main>
  );
}
