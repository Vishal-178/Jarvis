"use client"
import { useRequiredData } from "@/provider/MainDataProvider";
import Link from "next/link";

const TopHeading = () => {
  const { data } = useRequiredData();
  return (
    <>
<section
  id="home"
  className="relative z-10 overflow-hidden mt-20 py-2 xl:mt-20 xl:py-28"
>
  <div className="container mx-auto px-4">
    <div className="text-center mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 md:text-5xl lg:text-6xl">
        {data.detail.Name}
      </h1>
    </div>
  </div>
</section>


    </>
  );
  
  
};

export default TopHeading;
