import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <div className="w-[775px] h-20 relative">
      <div className="w-[775px] h-20 left-0 top-0 absolute bg-[#f0efef]/90 rounded-[15px]" />
      <div className="w-[281.56px] h-[51.05px] left-[315px] top-[16px] absolute">
        <div className="w-[281.56px] h-[51.05px] px-2.5 py-2 left-0 top-0 absolute rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black justify-center items-center gap-2 inline-flex">
          <div className="text-black text-2xl font-normal font-sans-serif">
            01/02/2025
          </div>
        </div>
        <div className="w-6 h-6 left-[238px] top-[14px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute bg-[#d9d9d9]" />
        </div>
      </div>
      <div className="w-[281.56px] h-[51px] p-2 left-[17px] top-[16px] absolute rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black justify-center items-center gap-2 inline-flex">
        <div className="">
          <div className="text-black text-2xl font-normal font-sans-serif">
            Building
            <IoIosArrowDown className="flex" />
          </div>
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute bg-[#d9d9d9]" />
        </div>
      </div>
      <div className="w-[140px] h-[51.05px] p-2 left-[613px] top-[16px] absolute bg-[#23486a] rounded-[15px] justify-center items-center gap-2 inline-flex">
        <div className="text-white text-xl font-normal font-sans-serif">
        <Link to="/TaskScheduler">Book now </Link>
        </div>
      </div>
    </div>
  );
};

export default Select;
