import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar2 from "./Navbar2";

const CheckCircle = () => (
  <svg className="w-20 h-20 text-green-500 mx-auto" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RoomBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [bookingData, setBookingData] = useState({
    room: "LX 10/1",
    status: "Available",
    startDate: "--",
    startTime: "--:--",
    endDate: "--",
    endTime: "--:--",
    duration: "Unknown",
    name: "",
    description: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const room = queryParams.get("room");
    const status = queryParams.get("status");

    setBookingData((prev) => ({
      ...prev,
      room: room || prev.room,
      status: status || prev.status,
      startDate: location.state?.startDate || prev.startDate,
      startTime: location.state?.startTime || prev.startTime,
      endDate: location.state?.endDate || prev.endDate,
      endTime: location.state?.endTime || prev.endTime,
      duration: location.state?.duration || prev.duration,
    }));
  }, [location.search, location.state]);

  // ตรวจสอบว่ามีข้อมูลพอสำหรับการจองหรือไม่
  useEffect(() => {
    if (!location.state) {
      alert("Please select date and time before booking.");
      navigate("/"); // กลับไปหน้าเลือกเวลา
    }
  }, [location.state, navigate]);

  const handleConfirm = () => {
    if (!bookingData.name.trim()) {
      alert("Please enter your name before confirming.");
      return;
    }

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setIsPopupOpen(true);
  };

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
              <img src="/IMG/room.jpg" alt="room" className="w-full rounded-xl shadow-lg" />
            </div>

            {/* Booking Details */}
            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold">{bookingData.room}</h1>
              <p className="mt-4 text-lg"><strong>Room Status:</strong> {bookingData.status}</p>

              {/* แสดงวันที่และเวลาที่เลือก */}
              <p className="text-lg"><strong>Start Date:</strong> {bookingData.startDate} <strong>Time:</strong> {bookingData.startTime}</p>
              <p className="text-lg"><strong>End Date:</strong> {bookingData.endDate} <strong>Time:</strong> {bookingData.endTime}</p>
              <p className="text-lg"><strong>Duration:</strong> {bookingData.duration}</p>

              {/* Name Input */}
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

              {/* Description Input */}
              <div className="mt-4">
                <label className="block text-lg font-semibold">Description:</label>
                <textarea
                  placeholder="Enter description (optional)"
                  className="w-full p-3 rounded-xl bg-gray-200 shadow-xl mt-2"
                  value={bookingData.description}
                  onChange={(e) => setBookingData({ ...bookingData, description: e.target.value })}
                />
              </div>

              {/* Confirm Button */}
              <button
                className={`mt-6 px-6 py-3 rounded-lg shadow-md w-full ${
                  bookingData.name.trim() ? "bg-blue-900 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                onClick={handleConfirm}
                disabled={!bookingData.name.trim()}
              >
                Confirm Booking
              </button>

              {/* Cancel Button */}
              <button className="mt-4 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md w-full" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <CheckCircle />
            <h2 className="text-2xl font-bold mt-4">Booking Confirmed!</h2>
            <p className="mt-2">Your room has been successfully booked.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomBooking;
