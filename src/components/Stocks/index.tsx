"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRequiredData } from "@/provider/MainDataProvider";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CSKSharePrice = () => {
  const { data,timeframe,setTimeframe } = useRequiredData();
  const [dataSets, setDataSets] = useState<any>({});
  

  // Update datasets when data changes
  useEffect(() => {
    if (!data) return; // Prevent crashes when data is not available

    setDataSets({
      daily: {
        labels: data.Daily ? Object.keys(data.Daily) : [],
        data: data.Daily ? Object.values(data.Daily) : [],
      },
      weekly: {
        labels: data.Weekly ? Object.keys(data.Weekly) : [],
        data: data.Weekly ? Object.values(data.Weekly) : [],
      },
      monthly: {
        labels: data.monthly ? Object.keys(data.monthly) : [],
        data: data.monthly ? Object.values(data.monthly) : [],
      },
    });
  }, [data]);

  

  // Chart data configuration
  const chartData = {
    labels: dataSets[timeframe]?.labels || [],
    datasets: [
      {
        label: "CSK Share Price",
        data: dataSets[timeframe]?.data || [],
        borderColor: "#34c759",
        backgroundColor: "#34c759",
        tension: 0,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="w-full sm:w-auto">
      {/* Share Price Header */}
      <div className="flex flex-col">
        <Image
          src="/images/csk.avif"
          alt="CSK Logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-medium mt-5">{`${data.detail.Name} Price`}</h2>
          <div className="flex items-center space-x-4 mt-5">
            <span className="text-2xl font-semibold">{timeframe === "monthly" ? `${Object.entries(data.monthly).pop()[1]}` : timeframe === "weekly" ? `${Object.entries(data.Weekly).pop()[1]}` : timeframe === "daily" ? `${Object.entries(data.Daily).pop()[1]}` : `${Object.entries(data.monthly).pop()[1]}`}</span>
            <span className="text-green-500 text-base">
              {(() => {
                const selectedData =
                  timeframe === "monthly"
                    ? data.monthly
                    : timeframe === "weekly"
                    ? data.Weekly
                    : timeframe === "daily"
                    ? data.Daily
                    : data.monthly;

                if (!selectedData || Object.keys(selectedData).length === 0) {
                  return "N/A"; // Handle empty or undefined data
                }

                const entries = Object.entries(selectedData);
                const firstValue:any = entries?.shift()?.[1] ?? 0; // Handle undefined values
                const lastValue:any = entries?.pop()?.[1] ?? 0;

                return lastValue - firstValue;
              })()}
            </span>

            <span className="text-green-500 font-medium text-base">
            {(() => {
              const selectedData =
                timeframe === "monthly"
                  ? data.monthly
                  : timeframe === "weekly"
                  ? data.Weekly
                  : timeframe === "daily"
                  ? data.Daily
                  : data.monthly;

              if (!selectedData || Object.keys(selectedData).length === 0) {
                return "N/A"; // Handle empty or undefined data
              }

              const entries = Object.entries(selectedData);
              const firstValue:any = entries?.shift()?.[1] ?? 0; // First value
              const lastValue:any = entries?.pop()?.[1] ?? 0; // Last value

              const percentageChange =
                firstValue !== 0 ? ((lastValue - firstValue) / firstValue) * 100 : 0;

              return `${percentageChange.toFixed(1)}%`; // Show 1 decimal place
            })()}
          </span>

            <span className="text-gray-500 text-medium">2M</span>
          </div>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="flex space-x-4 mt-5">
        {["daily", "weekly", "monthly"].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-4 py-2 rounded-md ${
              timeframe === tf ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </button>
        ))}
      </div>

      {/* Line Chart */}
      <div className="mt-6 w-full sm:w-[500px] sm:h-[400px] lg:w-[600px] xl:w-[768px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CSKSharePrice;
