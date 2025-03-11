import BuyOrSellForm from "@/components/BuyOrSellForm";
import TopHeading from "@/components/TopHeading";
import Shareholding from "@/components/Shareholding";
import { Metadata } from "next";
import FAQ from "@/components/FaQ";
import AboutShare from "@/components/AboutShare";
import CSKSharePrice from "@/components/Stocks";
import BlogSection from "@/components/Blog";
import Financials from "@/components/Financials";
import Promoters from "@/components/Promoters";

export const metadata: Metadata = {
  title: "CSK Unlisted Shares - Price & Insights",
  description: "Explore the share price of Chennai Super Kings and gain insights into unlisted shares. Invest in the future of CSK today with detailed information.",
};

export default function Home() {
  return (
    <>
    <div className=" mx-auto px-4 sm:px-10 lg:px-20 xl:px-28 max-w-[1440px]">
      <TopHeading />
      <div className="flex flex-wrap xl:flex-nowrap space-x-4 sm:space-x-8 lg:space-x-16 justify-between pt-20">
        <CSKSharePrice />
        <BuyOrSellForm />
      </div>

      <AboutShare/>
      <Financials />
      <Shareholding />
      <Promoters />
      <FAQ/>
    </div>
    <BlogSection number={3}/>
    </>
  );
}

