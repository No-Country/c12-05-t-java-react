import React, { useState } from "react";
import { Navbar } from "../components/dashboard/Navbar";
import SearchBar from "../components/dashboard/SearchBar";
import { Stock } from "../components/dashboard/Stock";
import Profile from "../pages/Profile";

export const Dashboard = () => {
  const [screen, setScreen] = useState("profile");
  console.log(screen);

  if (screen === "stock") {
    return (
      <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen border-2 border-gray-400 bg-neutral-200">
        <Navbar setScreen={setScreen} />
        <SearchBar />
        <div className="border-2 border-gray-400 row-span-2">
          <div className="flex justify-end items-end h-full">
            <img
              className="h-4/6 w-4/6"
              src="../../twemoji_hammer-and-wrench.svg"
              alt="hammer and wrench"
            />
          </div>
        </div>
        <Stock />
      </div>
    );
  } else if (screen === "profile") {
    return (
      <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen border-2 border-gray-400 bg-neutral-200">
        <Navbar setScreen={setScreen} />
        <div className="border rounded p-4 border-gray-400 col-span-3 row-span-2">
          <Profile />
        </div>
        <div className="border-2 border-gray-400 row-span-2">
          <div className="flex justify-end items-end h-full">
            <img
              className="h-4/6 w-4/6"
              src="../../twemoji_hammer-and-wrench.svg"
              alt="hammer and wrench"
            />
          </div>
        </div>
      </div>
    );
  }
};
