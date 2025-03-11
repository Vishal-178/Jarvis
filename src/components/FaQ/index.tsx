"use client"
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the share price of Chennai Super Kings (CSK)?",
    answer: "The price of CSK shares can be found on our website. We provide real-time updates based on the latest private transactions.",
  },
  {
    question: "Can I buy shares of Chennai Super Kings?",
    answer: "Yes, you can buy shares of CSK through our platform. We help connect buyers and sellers in private transactions.",
  },
  {
    question: "Why are Chennai Super Kings shares unlisted?",
    answer: "CSK shares are unlisted as the team is privately owned and has not yet gone public through a stock exchange listing.",
  },
  {
    question: "How is Chennai Super Kings performing financially?",
    answer: "Chennai Super Kings is one of the most successful teams in the IPL, with strong financial backing and brand value. Detailed financials can be found on our website.",
  },
  {
    question: "Is it a good idea to invest in CSK shares?",
    answer: "Investing in CSK shares can offer potential growth, but like all unlisted shares, it carries higher risk due to limited liquidity and market unpredictability.",
  },
  {
    question: "What makes Chennai Super Kings an attractive investment?",
    answer: "CSK has a highly successful brand, large fanbase, and consistent performance in the IPL, which increases its value as a long-term investment. You can find more details on its market potential on our website.",
  },
  {
    question: "How can I track the price of CSK shares?",
    answer: "The price of CSK shares is updated on our platform regularly. You can check the latest price at any time by visiting our page.",
  },
  {
    question: "Can I sell my Chennai Super Kings shares easily?",
    answer: "Selling unlisted shares can be challenging due to lower liquidity. However, we assist in connecting sellers with potential buyers and help facilitate the transaction process.",
  },

  {
    question: "Are there any risks involved in investing in CSK shares?",
    answer: "Yes, investing in CSK shares, like all unlisted shares, involves risks such as lower liquidity and market volatility. It is important to research and consider these factors before investing.",
  },
  {
    question: "What is the future outlook for CSK shares?",
    answer: "Given the team’s strong brand value, successful track record in the IPL, and expanding market reach, CSK shares have a promising future. However, as with all investments, there are risks, and it's essential to evaluate them carefully.",
  },
  
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };



  return (
    <div className="mx-auto my-10 max-w-3xl">
      <h2 className="text-3xl font-bold text-center mb-6">FAQ's</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-4 text-lg text-left font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndexes.includes(index) ? (
                <MinusCircle className="w-8 h-8 text-[#98A2B3]" />
              ) : (
                <PlusCircle className="w-8 h-8 text-[#98A2B3]" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndexes.includes(index) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
