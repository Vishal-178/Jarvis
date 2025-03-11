import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const RequiredDataContext = createContext({} as any);

// Provider Component
export const RequiredDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState("monthly");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/get-required-data"); // Replace with your API
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show full-page loading screen
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300">
        Loading ...
      </div>
    );
    
  }



  return (
    <RequiredDataContext.Provider value={{ data,timeframe,setTimeframe }}>
      {children}
    </RequiredDataContext.Provider>
  );
};

// Custom Hook
export const useRequiredData = () => {
  const context = useContext(RequiredDataContext);
  if (!context) {
    throw new Error("useRequiredData must be used within a RequiredDataProvider");
  }
  return context;
};
