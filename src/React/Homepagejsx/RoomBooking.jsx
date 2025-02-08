import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar2 from "./Navbar2";

const CheckCircle = () => (
  <svg
    className="w-20 h-20 text-green-500 mx-auto"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 12l3 3 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RoomBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ตั้งค่าดีฟอลต์
  const defaultBooking = {
    room: "LX 10/1",
    status: "Available",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    duration: "0 hours",
    name: "",
    description: "",
  };

  const [bookingData, setBookingData] = useState(defaultBooking);

  // ดึงข้อมูลจาก URL Params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const room = queryParams.get("room");
    const status = queryParams.get("status");

    setBookingData((prev) => ({
      ...prev,
      room: room || prev.room,
      status: status || prev.status,
    }));
  }, [location.search]);

  // คำนวณระยะเวลาการจอง
  useEffect(() => {
    if (bookingData.startDate && bookingData.startTime && bookingData.endDate && bookingData.endTime) {
      const start = new Date(`${bookingData.startDate}T${bookingData.startTime}`);
      const end = new Date(`${bookingData.endDate}T${bookingData.endTime}`);
      
      if (end > start) {
        const durationInHours = (end - start) / (1000 * 60 * 60);
        setBookingData((prev) => ({ ...prev, duration: `${durationInHours.toFixed(2)} hours` }));
      } else {
        setBookingData((prev) => ({ ...prev, duration: "Invalid time selection" }));
      }
    }
  }, [bookingData.startDate, bookingData.startTime, bookingData.endDate, bookingData.endTime]);

  // เมื่อกด Confirm
  const handleConfirm = () => {
    if (!bookingData.name.trim()) {
      alert("Please enter your name before confirming.");
      return;
    }

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setIsPopupOpen(true);
  };

  // เมื่อกด Done
  const handleDone = () => {
    setIsPopupOpen(false);
    navigate("/confirmation", { state: bookingData });
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col items-center bg-white min-h-screen">
        <div className="w-full max-w-4xl mt-20 px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/IMG/room.jpg"
                alt="room"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Booking Details */}
            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold">{bookingData.room}</h1>
              <p className="mt-4 text-lg">
                <strong>Room Status:</strong> {bookingData.status}
              </p>

              {/* เลือกวันที่และเวลา */}
              <div className="mt-4">
                <label className="block text-lg font-semibold">Start Date:</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.startDate}
                  onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold">Start Time:</label>
                <input
                  type="time"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.startTime}
                  onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold">End Date:</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.endDate}
                  onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold">End Time:</label>
                <input
                  type="time"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.endTime}
                  onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                />
              </div>

              <p className="text-lg mt-4">
                <strong>Duration:</strong> {bookingData.duration}
              </p>

              {/* Input Fields */}
              <div className="mt-6">
                <label className="block text-lg font-semibold">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold">Description:</label>
                <textarea
                  placeholder="Enter description (optional)"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.description}
                  onChange={(e) => setBookingData({ ...bookingData, description: e.target.value })}
                />
              </div>

              {/* Buttons */}
              <button
                className={`mt-6 px-6 py-3 rounded-lg shadow-md w-full ${
                  bookingData.name.trim() ? "bg-blue-900 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                onClick={handleConfirm}
                disabled={!bookingData.name.trim()}
              >
                Confirm Booking
              </button>

              <button
                className="mt-4 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md w-full"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBooking;
