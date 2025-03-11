"use client";
import { useRequiredData } from "@/provider/MainDataProvider";
import { useEffect, useState } from "react";

const Financials = () => {
  const { data } = useRequiredData();
  const [activeTab, setActiveTab] = useState("Income Statement");
  const [dataOnSheet, setDataOnSheet] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data) {
      setDataOnSheet({
        "Income Statement": data["Income Statement"] || [],
        "Balance Sheet": data["Balance Sheet"] || [],
        "Cash Flow": data["Cash Flow"] || [],
      });
    }
  }, [data]);

  useEffect(() => {
    if (dataOnSheet[activeTab]?.length > 0) {
      let filteredColumns = Object.keys(dataOnSheet[activeTab][0]).filter(col => col !== "id");
      
      // Ensure the correct first column based on the active tab
      let firstColumn = "P&L Statement";
      if (activeTab === "Balance Sheet") {
        firstColumn = "Assets";
      } else if (activeTab === "Cash Flow") {
        firstColumn = "Cash-Flow Statement";
      }
      
      filteredColumns = [firstColumn, ...filteredColumns.filter(col => col !== firstColumn)];
      setColumns(filteredColumns);
    } else {
      setColumns([]);
    }
  }, [activeTab, dataOnSheet]);

  return (
    <div className="max-w-3xl bg-white p-6 overflow-x-auto py-8">
      {/* Title */}
      <p className="text-2xl font-semibold text-[#757575]">Financials (In Cr)</p>
      
      {/* Tabs */}
      <div className="flex border-b">
        {Object.keys(dataOnSheet).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-2 font-medium ${
              activeTab === tab
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col, index) => (
                <th key={index} className="p-3 text-left font-medium text-gray-600">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataOnSheet[activeTab]?.map((row, index) => (
              <tr key={index} className="border-b">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="p-3 text-gray-700">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Financials;
