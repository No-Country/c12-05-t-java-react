import React from "react";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { PiListChecksBold } from "react-icons/pi";

export const Navbar = () => {
  return (
    <div className="col-span-4 border-2 border-gray-400">
      <div className="flex justify-between h-full items-center">
        <div className="w-1/4 flex justify-center items-center gap-5">
          <img
            className="rounded-full"
            src="../../logoHammer.png"
            height="30px"
            width="30px"
          />
          <spam className="text-2xl font-saira">
            <h1>STOCK WISE</h1>
          </spam>
        </div>
        <div className="w-2/6 flex gap-2 p-2">
          <ul className="flex w-full justify-end gap-5 mr-2">
            <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
              <Link to="/users" className="flex gap-2">
                <IoMdContacts className="text-2xl" />
                <span className="">usuarios</span>
              </Link>
            </li>
            <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
              <Link to="/dashboard" className="flex gap-2">
                <PiListChecksBold className="text-2xl" />
                <span className="">inventario</span>
              </Link>
            </li>
            <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
              <Link to="/profile">
                <IoMdContact className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
