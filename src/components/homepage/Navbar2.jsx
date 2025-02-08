import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div className="flex justify-between mx-6.5">
        <div className="w-[198px] h-[26px] text-center text-black text-[22px] font-medium font-sans-serif tracking-tight my-6">
          <Link to = "/">SIT Room Booking</Link>
        </div>

        <div className="top-0 w-[60%] max-w-5xl bg-[#23486a] shadow-2xl rounded-b-[50px] px-7 py-4 flex justify-center items-center Nav">
          <div className="relative flex justify-center items-center gap-40 text-center text-white text-xl font-normal trackfont-sans-serif ing-tight">
            <Link to="/TaskScheduler">Calendar </Link>
            <a href="">Book multiple rooms</a>
            <a href="">Room</a>
          </div>
        </div>

        <div className="my-6 w-[90px] h-10 p-2  bg-[#23486a] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center mx-9.5 inline-flex transition-transform duration-300 hover:scale-110">
          <a
            className="text-center text-white text-xl font-normal font-sans-serif  tracking-tight"
            href="#"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
