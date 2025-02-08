import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar2 from "../homepage/Navbar2";
import { createBooking } from "../../services/booking.service";
import { getBuildingImage } from "../../utils/imageUtils";

const CheckCircle = () => (
  <svg className="w-20 h-20 mx-auto text-green-500" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RoomBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [bookingData, setBookingData] = useState({
    room_id: "",
    roomName: "",
    building: "",
    status: "Available",
    time_start: "--:--",
    time_end: "--:--",
    date: "",
    duration: "Unknown",
    name: "",
    email: "",
    phonenumber: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const room = queryParams.get("room");
    const roomName = queryParams.get("roomName")
    const building = queryParams.get("building")
    const status = queryParams.get("status");
    const date = queryParams.get("date")
    const start = queryParams.get("start");
    const end = queryParams.get("end");

    const duration = start && end ? `${start} - ${end}` : "Unknown";
    
    setBookingData((prev) => ({
      ...prev,
      room_id: room || prev.room,
      roomName,
      building,
      status: status || prev.status,
      time_start: start,
      time_end: end,
      date,
      duration
    }));
  }, [location.search, location.state]);

  // ตรวจสอบว่ามีข้อมูลพอสำหรับการจองหรือไม่
  const handleConfirm = async () => {
    try {
      const createdBooking = await createBooking(bookingData);
      console.log('New booking:', createdBooking);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("There was an error updating the booking." , error);
    }
  };

  const handleDone = () => {
    setIsPopupOpen(false);
    navigate("/confirmation", { state: bookingData });
  };

  return (
    <div className="overflow-y-auto h-screen">
      <Navbar2 />
      <div className="flex flex-col items-center bg-white pb-4">
        <div className="w-full max-w-4xl px-6 mt-20">
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img src={getBuildingImage(bookingData.building)} alt="room" className="w-full shadow-lg rounded-xl" />
            </div>

            {/* Booking Details */}
            <div className="w-full mt-6 md:w-1/2 md:pl-8 md:mt-0">
              <h1 className="text-3xl font-bold">{bookingData.roomName}</h1>
              <p className="mt-4 text-lg"><strong>Room Status:</strong> {bookingData.status}</p>

              {/* แสดงวันที่และเวลาที่เลือก */}
              <p className="text-lg"><strong>Start Date:</strong> {bookingData.date} <strong>Time:</strong> {bookingData.time_start}</p>
              <p className="text-lg"><strong>End Date:</strong> {bookingData.date} <strong>Time:</strong> {bookingData.end_time}</p>
              <p className="text-lg"><strong>Duration:</strong> {bookingData.duration}</p>

              {/* Name Input */}
              <div className="mt-6">
                <label className="block text-lg font-semibold">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 bg-gray-200 shadow-xl rounded-xl"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </div>

              {/* Email Input */}
              <div className="mt-6">
                <label className="block text-lg font-semibold">Email:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 bg-gray-200 shadow-xl rounded-xl"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                />
              </div>

              {/* Phone Number Input */}
              <div className="mt-6">
                <label className="block text-lg font-semibold">Phone:</label>
                <input
                  type="number"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 bg-gray-200 shadow-xl rounded-xl"
                  value={bookingData.phonenumber}
                  onChange={(e) => setBookingData({ ...bookingData, phonenumber: e.target.value })}
                />
              </div>



              {/* Title Input */}
              <div className="mt-4">
                <label className="block text-lg font-semibold">Title:</label>
                <textarea
                  placeholder="Enter description (optional)"
                  className="w-full p-3 mt-2 bg-gray-200 shadow-xl rounded-xl"
                  value={bookingData?.title}
                  onChange={(e) => setBookingData({ ...bookingData, title: e.target.value })}
                />
              </div>


              {/* Description Input */}
              <div className="mt-4">
                <label className="block text-lg font-semibold">Description:</label>
                <textarea
                  placeholder="Enter description (optional)"
                  className="w-full p-3 mt-2 bg-gray-200 shadow-xl rounded-xl"
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
              <button className="w-full px-6 py-3 mt-4 text-gray-700 bg-gray-300 rounded-lg shadow-md" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="p-8 text-center bg-white rounded-lg shadow-lg">
            <CheckCircle />
            <h2 className="mt-4 text-2xl font-bold">Booking Confirmed!</h2>
            <p className="mt-2">Your room has been successfully booked.</p>
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow-md" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomBooking;
