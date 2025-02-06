import "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckCircle = () => (
  <svg className="w-20 h-20 text-green-500 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RoomBooking = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate(); // ใช้ Hook เพื่อนำทางไปหน้าใหม่

  const handleConfirm = () => {
      setIsPopupOpen(true);
  };

  const handleDone = () => {
      setIsPopupOpen(false);
      navigate("/confirmation"); // เปลี่ยนไปหน้า /confirmation หลังจากกด Done
  };

  return (
      <div className="flex flex-col items-center p-6 bg-white min-h-screen">
          <div>
              <div className="absolute top-0 left-0 w-full h-20 flex justify-between items-center px-8"></div>
              
              <div className="flex flex-col md:flex-row items-center mt-40 px-6">
                  <div className="w-200 justify-center">
                      <img src="./images/room.jpg" alt="room" className="w-full rounded-xl shadow-lg" />
                  </div>
                  <div className="w-1/2 pl-8">
                      <h1 className="text-3xl font-bold">LX 10/1</h1>
                      <p className="mt-4 text-lg"><strong>Start date:</strong> 9 Feb 2025 <strong>Time:</strong> 9:00</p>
                      <p className="text-lg"><strong>End date:</strong> 9 Feb 2025 <strong>Time:</strong> 12:00</p>
                      <p className="text-lg"><strong>Duration:</strong> 3 hours</p>

                      <label className="block mt-6 text-lg font-semibold">Name:</label>
                      <input
                          type="text"
                          placeholder="Name"
                          className="w-full p-3 rounded-xl bg-gray-200 shadow-xl"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />

                      <label className="block mt-4 text-lg font-semibold">Description:</label>
                      <textarea
                          placeholder="Description Box"
                          className="w-full p-3 rounded-xl bg-gray-200 shadow-xl"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                      ></textarea>

                      <button 
                          className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md w-full"
                          onClick={handleConfirm}
                      >
                          Confirm Booking
                      </button>
                      <button className="mt-4 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md w-full">
                          Cancel
                      </button>
                  </div>
              </div>
          </div>

          {/* Popup Modal */}
          {isPopupOpen && (
              <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                      <CheckCircle /> 
                      <h2 className="text-2xl font-bold mt-4">Room Booking Successful</h2>
                      <button 
                          className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md w-full"
                          onClick={handleDone}
                      >
                          Done
                      </button>
                  </div>
              </div>
          )}
      </div>
  );
};


export default RoomBooking;
