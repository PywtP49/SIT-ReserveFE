import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../services/booking.service";

export default function Select() {
  const [building, setBuilding] = useState("");
  const [date, setDate] = useState("");
  const [time_start, setStartTime] = useState("");
  const [time_end , setEndTime] = useState("");
  const navigate = useNavigate();

  const getRoomIdByBuilding = (building) => {
    const roomMapping = {
      LX: 1,  // mapping ห้องตาม building
      CB2: 2,
      "SIT Building": 3,
    };
    return roomMapping[building] || null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomId = getRoomIdByBuilding(building);
    if (!roomId) {
      alert("Please select a valid building.");
      return;
    }

    const formData = {
        "name": "Punch Pimmada",
        "email": "john_updated@example.com",
        "phonenumber": "987654321",
        "title": "Updated Meeting",
        "description": "Updated project discussion",
        "room_id": roomId,
        "date": "2025-02-13",
        "time_start": `${time_start}`,
        "time_end": `${time_end }`,
        "timestamp": `${date}`
      };
    try {
      await createBooking(formData);
      navigate(
        `/room-lists?building=${building}&date=${date}&start=${time_start}&end=${time_end}`
      );
    } catch (e) {
      console.error("Createbooking Error", e);
    }
  };

  return (
    <>
      {/* <Navbar3/> */}
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
            <button
              type="submit"
              className="justify-between text-lg font-normal text-white font-sans-serif"
            >
              Book now
            </button>
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
