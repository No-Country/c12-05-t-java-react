import React from "react";
import { Navbar } from "../components/dashboard/Navbar";
import SearchBar from "../components/dashboard/SearchBar";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen border-2 border-gray-400 bg-neutral-200">
      <Navbar />
      <SearchBar />
      <div className="border-2 border-gray-400 row-span-2"></div>
      <div className="border-2 border-gray-400 col-span-3"></div>
    </div>
  );
};
