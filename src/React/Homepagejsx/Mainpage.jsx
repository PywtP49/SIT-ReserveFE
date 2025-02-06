import React from "react";
import Navbar from "./Navbar";
import Select from "./Select";

const Mainpage = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <div className="Main text-center h-full flex-col text-[#ffffff]/90  text-[96px] font-medium font-sans-serif tracking-tight flex items-center justify-center">
          SIT Room Booking
        <Select/>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
