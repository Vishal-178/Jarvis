"use client"
import { useRequiredData } from "@/provider/MainDataProvider";


const Shareholding = () => {
  const { data } = useRequiredData();
  const tableData = data?.["Shareholding Pattern"] || [];

  // Extract column names dynamically, ensuring "P&L Statement" is first
  const columns = tableData.length > 0 ? Object.keys(tableData[0]).filter(col => col !== "id") : [];
  const sortedColumns = ["Shareholding Pattern", ...columns.filter(col => col !== "Shareholding Pattern")];

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
                  <td key={colIndex} className="p-3 text-gray-700">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shareholding;
