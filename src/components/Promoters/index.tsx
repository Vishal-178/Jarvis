"use client"
import { useRequiredData } from "@/provider/MainDataProvider";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Promoters = () => {
  const { data } = useRequiredData();
  const tableData = data?.["Promoters or Management"] || [];

  // Ensure the correct column order
  const sortedColumns = ["Name", "Designation", "Experience", "Linkedin Profile"];

  return (
    <div className="max-w-3xl bg-white py-8">
      <p className="text-2xl font-semibold text-[#757575] mb-4">Shareholding Pattern</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              {sortedColumns.map((col, index) => (
                <th key={index} className="p-3 text-left font-medium text-gray-600">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {sortedColumns.map((col, colIndex) => (
                  <td key={colIndex} className="p-3 text-gray-700">
                    {col === "Linkedin Profile" ? (
                      <Image
                        src="/images/linkedin.svg"
                        alt="Linkedin Profile"
                        width={24}
                        height={24}
                        className="inline-block"
                      />
                    ) : (
                      row[col]
                    )}
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

export default Promoters;