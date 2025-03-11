"use client";
import { useState } from "react";
import Buy from "./Buy";
import Sell from "./Sell";
import Image from "next/image";
import { useRequiredData } from "@/provider/MainDataProvider";

const BuyOrSell = () => {
  const [buyOrSell, setBuyOrSell] = useState("sell");
  const { data } = useRequiredData();
  return (
    <section className=" mx-auto bg-white border rounded-2xl p-6">
      {/* Tabs for Buy and Sell */}
      <div className="flex border-b">
        <button
          className={`flex-1 text-center py-2 font-medium p-4 ${
            buyOrSell === "buy"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
          onClick={() => setBuyOrSell("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 text-center py-2 font-medium p-4 ${
            buyOrSell === "sell"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
          onClick={() => setBuyOrSell("sell")}
        >
          Sell
        </button>
      </div>

      {/* Content for Buy or Sell */}
      <div className="mt-4">{buyOrSell === "buy" ? <Buy /> : <Sell />}</div>

      {/* WhatsApp Button */}
      <button
        className="w-full mt-4 flex items-center justify-center border rounded-full py-4 border-gray-300 hover:bg-[#075e54] hover:text-white"
        onClick={() => window.open("https://wa.me/1234567890", "_blank")}
      >
        <Image
          className="mr-2"
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
        />
        Get Connected Now
      </button>
    </section>
  );
};

export default BuyOrSell;
