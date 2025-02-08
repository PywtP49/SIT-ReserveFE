import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  const [building, setBuilding] = useState("");
  const [date, setDate] = useState("");
  const [time_start, settime_start] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBookNow = () => {
    if (!building || !date || !time_start || !endTime) {
      alert("Please fill in all fields before booking.");
      return;
    }

    // คำนวณระยะเวลา
    const duration = calculateDuration(date, time_start, endTime);

    navigate("/roombooking", {
      state: {
        building,
        startDate: date,
        time_start,
        endDate: date, // กรณีจองวันเดียวกัน
        endTime,
        duration,
      },
    });
  };

  // คำนวณจำนวนชั่วโมง
  const calculateDuration = (date, start, end) => {
    const startDateTime = new Date(`${date}T${start}`);
    const endDateTime = new Date(`${date}T${end}`);
    const durationHours = (endDateTime - startDateTime) / (1000 * 60 * 60);
    return durationHours > 0 ? `${durationHours} hours` : "Invalid time";
  };

  return (
    <nav className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg w-[1061px] h-50 relativ">
      <div className="flex w-[281.56px] h-[51.05px] left-[212px] top-[16px] absolute">
        <select
          className="px-4 py-2 border rounded-lg"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
        >
          <option value="">Building</option>
          <option value="A">Building A</option>
          <option value="B">Building B</option>
        </select>

        <input
          type="date"
          className="px-4 py-2 border rounded-lg ml-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="px-4 py-2 border rounded-lg ml-2"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="time"
          className="px-4 py-2 border rounded-lg ml-2"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <button
          className="ml-4 px-6 py-2 bg-blue-900 text-white rounded-lg"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
