import React from "react";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-slate-200 hover:bg-slate-200/10 rounded-lg px-2 py-1">
          <h5 className="text-xl font-medium">Gemini</h5>
          <GoTriangleDown className="h-5 w-5" />
        </div>

        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 bg-slate-200/10 rounded-lg text-slate-200 px-6 py-2">
            <RiGeminiFill className="text-[#AB5759]" />
            <h4 className="text-sm font-semibold">Coba Gemini Advance</h4>
          </div>
          <div className="text-white hover:bg-slate-200/10 rounded-full px-2 py-2">
            <TbGridDots className="h-5 w-5" />
          </div>

          {/* UserAccount */}
          <div className="">
            <div className="rounded-full text-slate-200/15">
              <FaUser className="w-6 h-6" />
            </div>
          </div>
          {/* UserAccount */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
