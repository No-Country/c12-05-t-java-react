import React from "react";
import { Navbar } from "../components/dashboard/Navbar";
import SearchBar from "../components/dashboard/SearchBar";
import { Stock } from "../components/dashboard/Stock";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen border-2 border-gray-400 bg-neutral-200">
      <Navbar />
      <SearchBar />
      <div className="border-2 border-gray-400 row-span-2"></div>
      <Stock />
    </div>
  );
};
