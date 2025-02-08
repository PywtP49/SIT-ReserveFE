import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar3 from "./Navbar3";

export default function Select() {
  const [building, setBuilding] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/booking-details?building=${building}&date=${date}&start=${startTime}&end=${endTime}`
    );
  };

  return (
    <>
      <div className="w-[1061px] h-50 relative">
        <div className="w-[1061px] h-20 left-0 top-0 absolute bg-[#f0efef]/90 rounded-[15px]" />
        <form onSubmit={handleSubmit}>
          <div className="w-[281.56px] h-[51.05px] left-[212px] top-[16px] absolute">
            <div className="w-[281.56px] h-[51.05px] px-2.5 py-2 left-0 top-0 absolute rounded-[15px] border border-black justify-center items-center gap-2 inline-flex">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="text-base text-black" // หรือใช้ text-sm ถ้าต้องการให้เล็กลงอีก
              />
            </div>
          </div>
          <div className="w-[189px] h-[51px] p-2 left-[17px] top-[16px] absolute rounded-[15px] border border-black justify-center items-center gap-2 inline-flex text-black">
            <select
              onChange={(e) => setBuilding(e.target.value)}
              className="text-lg"
            >
              <option value="option1">Building</option>
              <option value="LX">LX</option>
              <option value="CB2">CB2</option>
              <option value="SIT Building">SIT Building</option>
            </select>
          </div>
          <div className="w-[140px] h-[51.05px] p-2 left-[906px] top-[16px] absolute bg-[#23486a] rounded-[15px] justify-center items-center gap-2 inline-flex transition-transform duration-300 hover:scale-110">
            <Link to = "/RoomlistLX"
              type="submit"
              className="text-white text-lg font-normal font-sans-serif justify-between"
            >
              Book now
            </Link>
          </div>
          <div className="w-[189px] h-[51px] p-2 left-[504px] top-[16px] absolute rounded-[15px] border border-black justify-center items-center gap-2 inline-flex">
            <input
              type="time"
              onChange={(e) => setStartTime(e.target.value)}
              className="text-lg text-black"
              min="09:00" 
              max="20:00" 
            
            />
          </div>
          <div className="w-[189px] h-[51px] p-2 left-[703px] top-[16px] absolute rounded-[15px] border border-black justify-center items-center gap-2 inline-flex">
            <input
              type="time"
              onChange={(e) => setEndTime(e.target.value)}
              className="text-lg text-black"
              min="09:30" 
              max="20:00"             
            />
          </div>
        </form>
      </div>
    </>
  );
}
